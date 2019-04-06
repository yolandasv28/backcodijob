"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresa_1 = require("../controllers/empresa");
//hacemos el enrutador exportable
//para que el index.ts pueda importar
exports.router_empresa = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_empresa.get('/empresa/getAll', empresa_1.controller_empresa.getAll);
exports.router_empresa.get('/empresa/updatebyid', empresa_1.controller_empresa.updatebyid);
exports.router_empresa.get('/empresa/deletebyid', empresa_1.controller_empresa.deletebyid);
exports.router_empresa.get('/empresa/create', empresa_1.controller_empresa.create);
