"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
//hacemos el enrutador exportable
//para que el index.ts pueda importar
exports.router_auth = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_auth.post('/auth/registrar', auth_1.controller_auth.registrar);
exports.router_auth.post('/auth/login', auth_1.controller_auth.login);
// router_skill.post('/proyecto/delete',controller_skill.deletebyid);
