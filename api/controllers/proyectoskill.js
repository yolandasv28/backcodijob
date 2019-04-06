"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const sequelize_2 = require("../config/sequelize");
const sequelize_3 = require("../config/sequelize");
exports.controller_proyectoskill = {
    create: (req, res) => {
        sequelize_3.Skill.findById(req.body.skill_id).then((skill) => {
            sequelize_2.proyecto.findById(req.body.pro_id).then((proyecto) => {
                sequelize_1.proyectoskill.create(req.body).then((proyectoSkillCreado) => {
                    let response = {
                        message: "creadted",
                        content: proyectoSkillCreado
                    };
                    res.status(201).send(response);
                }).catch(() => {
                    let response = {
                        message: "error",
                        content: `El proyecto con id ${req.body.pro_id} no existe`
                    };
                    res.status(500).send(response);
                });
            }).catch(() => {
                let response = {
                    message: "error",
                    content: `El skill con id ${req.body.skill_id} no existe`
                };
                res.status(500).send(response);
            });
        }).catch((error) => {
            let response = {
                message: "error",
                content: "Skill no existe"
            };
            res.status(500).send(response);
        });
    }
};
