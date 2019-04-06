"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectoskill_1 = require("../controllers/proyectoskill");
//hacemos el enrutador exportable
//para que el index.ts pueda importar
exports.router_proyecto = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_proyecto.post('/proyectoskill/create', proyectoskill_1.controller_proyectoskill.create);
// router_skill.post('/proyecto/delete',controller_skill.deletebyid);
