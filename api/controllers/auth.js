"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.controller_auth = {
    registrar: (req, res) => {
        ///////////////otra forma mandando el req.body
        var objPersona = sequelize_1.persona.build(req.body);
        var objUsuario = sequelize_1.usuario.build();
        objUsuario.setPassword(req.body.usu_pass);
        objPersona.save().then((personaCreada) => {
            if (personaCreada) {
                objUsuario.per_id = personaCreada.per_id;
                return objUsuario.save();
            }
            else {
                let response = {
                    message: "error",
                    content: "Error al crear la persona"
                };
                res.status(500).send(response);
            }
        }).then((usuarioCreado) => {
            if (usuarioCreado) {
                console.log(objUsuario.usu_id);
                console.log(usuarioCreado.usu_id);
                return usuarioCreado.generateJWT();
            }
            else {
                let response = {
                    message: "error",
                    content: "Se creó a la persona, pero no al usuario"
                };
                res.status(201).send(response);
            }
        }).then((token) => {
            let response = {
                message: "created",
                content: objUsuario,
                token: token
            };
            res.status(201).send(response);
        });
    },
    login: (req, res) => {
        var objPersona = sequelize_1.persona.build();
        var objUsuario = sequelize_1.usuario.build();
        sequelize_1.persona.findOne({
            where: {
                per_email: req.body.per_email
            }
        }).then((personaencontrada) => {
            if (personaencontrada != null) {
                objPersona = personaencontrada;
                console.log(objPersona);
                sequelize_1.usuario.findOne({
                    where: {
                        per_id: objPersona.per_id
                    }
                });
            }
            else {
                let response = {
                    message: 'error',
                    content: 'El email no está registrado'
                };
                res.status(500).send(response);
                throw ('El email no está registrado');
            }
        }).then((usuarioEncontrado) => {
            if (usuarioEncontrado) {
                objUsuario = usuarioEncontrado;
                if (objUsuario.validPassword(req.body.usu_pass) == true) {
                    //usuario con password autentico
                    return objUsuario.generateJWT();
                }
                else {
                    let response = {
                        message: 'error',
                        content: "Contraseña Incorrecta"
                    };
                    res.status(500).send(response);
                    throw ('Contraseña incorrecta');
                }
            }
            else {
                let response = {
                    message: 'error',
                    content: "No existe un usuario para ésta persona"
                };
                res.status(500).send(response);
                throw ('No existe un usuario para ésta persona');
            }
        }).then((token) => {
            let response = {
                message: 'success',
                token: token
            };
            res.status(200).send(response);
        }).catch((error) => {
            console.log("error");
            console.log(error);
        });
    }
};
