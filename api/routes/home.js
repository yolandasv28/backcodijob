"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import{controller_home} from '../controllers/home';
var controller_home = require('../controllers/home');
//hacemos el enrutador exportable
//para que el index.ts pueda importar
exports.router_home = express_1.Router();
//otra forma de exportar VARIABLES EN NODE: 
//module.exports=_home;
exports.router_home.get('/', controller_home.home);
exports.router_home.get('/otraruta', controller_home.otraruta);
