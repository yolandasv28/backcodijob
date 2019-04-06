"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skill_1 = require("../controllers/skill");
//hacemos el enrutador exportable
//para que el index.ts pueda importar
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './imagenes' });
exports.router_skill = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_skill.get('/skill/getAll', skill_1.controller_skill.getAll);
exports.router_skill.get('/skill/update', skill_1.controller_skill.updatebyid);
// router_skill.get('/skill/deletebyid',controller_skill.deletebyid);
exports.router_skill.post('/Skill/create', multipartMiddleware, skill_1.controller_skill.create);
exports.router_skill.post('/Skill/update', skill_1.controller_skill.updatebyid);
// router_skill.post('/Skill/delete',controller_skill.deletebyid);
