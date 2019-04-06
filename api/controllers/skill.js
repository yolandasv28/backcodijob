"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import {SkillDTO} from '../dto/Skill';
const sequelize_1 = require("../config/sequelize");
// body parser
var fs = require('fs');
exports.controller_skill = {
    getAll: (req, res) => {
        // console.log(`Variable 'a' => ${req.query.a}`);
        // SkillDTO.getAll().then((skills)=>{
        //     console.log(skills);
        //     res.send(skills);
        // }).catch((error)=>{
        //     console.log(error);
        // });
        sequelize_1.Skill.findAll().then((skills) => {
            let response = {
                respuesta: "Obtenido",
                content: skills
            };
            res.status(200).send(response);
        });
    },
    updatebyid: (req, res) => {
        //     let skill=new Skill();
        //     //obteniendo los parametros recibidos por post
        //     let params=req.body;
        //     //creando los campos del objeto skill
        //     skill.SKILL_ID=params.skill_id;
        //     skill.SKILL_NOM=params.skill_nom;
        //     skill.SKILL_DESC=params.skill_desc;
        //     skill.SKILL_IMG=params.skill_img;
        //     //invocando a la funcion create(estática)
        //     //le madamos todo el objeto skill sin su ID
        //     SkillDTO.update(skill).then((skill:Skill)=>{
        //         let respuesta={
        //             mensaje:"Actualizado",
        //             content:skill
        //         }
        //         res.status(200).send(respuesta);
        //     }).catch((error)=>{
        //         let respuesta={
        //             mensaje:"error",
        //             content:error
        //         }
        //    res.status(500).send(respuesta);
        sequelize_1.Skill.update({
            skill_desc: req.body.skill_desc,
            skill_nom: req.body.skill_nom,
            skill_img: req.body.skill_img,
        }, {
            where: {
                skill_id: req.body.skill_id
            }
        }).then((respuesta) => {
            console.log(express_1.response);
            if (respuesta[0] === 1) {
                sequelize_1.Skill.findById(req.body.skill_id).then((skill) => {
                    let response = {
                        message: "updated",
                        content: skill
                    };
                    res.status(200).send(response);
                });
            }
            else {
                let response = {
                    message: "error",
                    content: "error"
                };
            }
            res.status(500).send(express_1.response);
        });
    },
    deletebyid: (req, res) => {
        //     let skill=new Skill();
        //     //obteniendo los parametros recibidos por post
        //     let params=req.body;
        //     //creando los campos del objeto skill
        //     skill.SKILL_ID=params.skill_id;
        //     skill.SKILL_NOM=params.skill_nom;
        //     skill.SKILL_DESC=params.skill_desc;
        //     skill.SKILL_IMG=params.skill_img;
        //     //invocando a la funcion create(estática)
        //     //le madamos todo el objeto skill sin su ID
        //     SkillDTO.delete(skill);
        //     res.send("Eliminando una Skill segun su ID");
    },
    create: (req, res) => {
        // //creando un objeto skill vacio
        // let skill=new Skill();
        // //obteniendo los parametros recibidos por post
        // let params=req.body;
        // //creando los campos del objeto skill
        // skill.SKILL_NOM=params.skill_nom;
        // skill.SKILL_DESC=params.skill_desc;
        // skill.SKILL_IMG=params.skill_img;
        // //invocando a la funcion create(estática)
        // //le madamos todo el objeto skill sin su ID
        // SkillDTO.create(skill).then((skill:Skill)=>{
        //     let respuesta={
        //         mensaje:"creado",
        //         content:skill
        //     }
        //     res.status(200).send(respuesta);
        // }).catch((error)=>{
        //     let respuesta={
        //         mensaje:"error",
        //         content:error
        //     }
        // })
        //////////////////////////////////forma para crear el objeto skill y se puede mandar en el create
        // let skill={
        //     skill_nom:req.body.skill_nom,
        //     skill_desc:req.body.skill_desc,
        //     skill_img:req.body.skill_img
        // }
        ///////////////////////////subiendo imagenes
        if (req.files) {
            console.log("tiene archivos");
            let path = req.files.skill_img.path;
            let pathSplit = path.split("\\");
            let nombreArchivo = pathSplit[1];
            let extensionSplit = nombreArchivo.split(".");
            let extension = extensionSplit[extensionSplit.length - 1];
            if (extension.toLowerCase() == "png" ||
                extension.toLowerCase() == "jpg" ||
                extension.toLowerCase() == "jpeg") {
                let objskill = {
                    skill_nom: req.body.skill_nom,
                    skill_desc: req.body.skill_desc,
                    skill_img: path,
                };
                /////////////otra forma mandando el req.body
                sequelize_1.Skill.create(objskill).then((skillCreado) => {
                    console.log("Creado");
                    console.log(skillCreado);
                    let response = {
                        respuesta: "creado",
                        content: skillCreado
                    };
                    res.status(200).send(response);
                });
            }
            else {
                //unlink([ruta_del_archivo],(error)=>{})
                //borra un archivo del sistema
                fs.unlink(path, (err) => {
                    if (err) {
                        console.log("Error al borrar archivo");
                    }
                    else {
                        let response = {
                            message: "error",
                            content: "El archivo no es una imagen"
                        };
                        res.status(500).send(response);
                    }
                });
            }
        }
        else {
            console.log("no tiene archivos");
            res.send("no tiene archivos");
        }
    }
    //     console.log(req.body.skill_nom);
    //     console.log(req.body.skill_desc);
    //    res.send("OK");
};
