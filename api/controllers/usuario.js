"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {SkillDTO} from '../dto/Skill';
const sequelize_1 = require("../config/sequelize");
const sequelize_2 = require("../config/sequelize");
const jwt = require('jsonwebtoken');
// body parser
var fs = require('fs');
exports.controller_usuario = {
    create: (req, res) => {
        let per_id = req.params.per_id;
        var objusuario = sequelize_1.usuario.build(req.body);
        sequelize_2.persona.findById(per_id).then((persona) => {
            if (persona) {
                //crear usuario
                objusuario.per_id = req.params.per_id;
                objusuario.setPassword(req.body.password);
                return objusuario.save();
            }
        }).then((usuarioCreado) => {
            return usuarioCreado.generateJWT();
        }).then((token) => {
            let response = {
                message: 'created',
                content: objusuario,
                token: token
            };
            res.status(201).send(response);
        });
    },
    privado: (req, res) => {
        jwt.verify(req.token, 'clave', (err, payload) => {
            if (err) {
                res.status(403).send(err);
            }
            else {
                let response = {
                    message: "validado",
                    content: payload
                };
                res.status(200).send(response);
            }
        });
    }
};
