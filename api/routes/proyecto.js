"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyecto_1 = require("../controllers/proyecto");
//hacemos el enrutador exportable
//para que el index.ts pueda importar
exports.router_proyecto = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_proyecto.post('/proyecto/create', proyecto_1.controller_proyecto.create);
// router_skill.post('/proyecto/delete',controller_skill.deletebyid);
