"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.controller_proyecto = {
    create: (req, res) => {
        ///////////////otra forma mandando el req.body
        sequelize_1.proyecto.create(req.body).then((proyectoCreado) => {
            console.log("Creado");
            console.log(proyectoCreado);
            let response = {
                respuesta: "creado",
                content: proyectoCreado
            };
            res.status(201).send(response);
        });
    }
};
