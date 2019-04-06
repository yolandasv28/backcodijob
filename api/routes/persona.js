"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("../controllers/persona");
//hacemos el enrutador exportable
//para que el index.ts pueda importar
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './imagenes' });
exports.router_persona = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_persona.get('/persona/getAll', persona_1.controller_persona.getAll);
exports.router_persona.get('/persona/update', persona_1.controller_persona.updatebyid);
// router_persona.get('/persona/deletebyid',controller_persona.deletebyid);
exports.router_persona.post('/persona/create', persona_1.controller_persona.create);
exports.router_persona.post('/persona/update', persona_1.controller_persona.updatebyid);
// router_skill.post('/persona/delete',controller_skill.deletebyid);
