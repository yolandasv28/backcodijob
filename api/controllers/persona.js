"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {SkillDTO} from '../dto/Skill';
const sequelize_1 = require("../config/sequelize");
// body parser
var fs = require('fs');
exports.controller_persona = {
    getAll: (req, res) => {
        sequelize_1.persona.findAll().then((personas) => {
            let response = {
                respuesta: "Obtenido",
                content: personas
            };
            res.status(200).send(response);
        });
    },
    updatebyid: (req, res) => {
        //  
    },
    deletebyid: (req, res) => {
    },
    create: (req, res) => {
        //creando una instancia u objeto de la clase persona
        let objpersona = sequelize_1.persona.build(req.body);
        console.log(objpersona);
        objpersona.saludar();
        // let objpersona={
        //     per_nombre:req.body.per_nombre,
        //     per_apellido:req.body.per_apellido,
        //    per_email:req.body.per_email,
        //    per_tel: req.body.per_tel,
        //    per_dni:req.body.per_dni,
        //    per_fechnac:req.body.per_fechnac,
        // };
        /////////////otra forma mandando el req.body
        // persona.create(objpersona).then((personaCreado:any)=>{
        //     console.log("Creado");
        //     console.log(personaCreado);
        //     let response={
        //         respuesta:"creado",
        //         content:personaCreado
        //     }
        //     res.status(200).send(response);
        // });      
        objpersona.save().then((personaCreada) => {
            if (personaCreada) {
                let response = {
                    respuesta: "creado",
                    content: personaCreada
                };
                res.status(201).send(response);
            }
            else {
                let response = {
                    respuesta: "error",
                    content: "error"
                };
                res.status(500).send(response);
            }
        });
    }
};
