"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos las rutas
const home_1 = require("./api/routes/home");
const empresa_1 = require("./api/routes/empresa");
const skill_1 = require("./api/routes/skill");
// import {router_proyectoskill} from './api/routes/proyectoskill';
const proyecto_1 = require("./api/routes/proyecto");
const persona_1 = require("./api/routes/persona");
const usuario_1 = require("./api/routes/usuario");
const auth_1 = require("./api/routes/auth");
//Importamos loa libreria express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    //se puede configurar que servidor puede consultar nuestro backend
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//realizando la conexion a Mysql    
// var mysql=require('mysql');
// export var connection=mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password:'admin',
//     database:'codijob'
// });
//INICIALIZACION DEL PUERTO
const PUERTO = process.env.PORT || 3700;
//use => setea configuraciones de rutas, middlewares,cors, etc
app.use('/', home_1.router_home);
app.use('/api', empresa_1.router_empresa);
app.use('/api', skill_1.router_skill);
app.use('/api', proyecto_1.router_proyecto);
app.use('/api', persona_1.router_persona);
app.use('/api', usuario_1.router_usuario);
app.use('/api', auth_1.router_auth);
//lanzamiento del servidor, lanza o ejecusta el servidor web
// app.listen(PUERTO,()=>{
//     connection.connect((error:any)=>{
//         console.log("Servidor corriendo perfectamente => localhost:3700");
//         if(error)
//         {
//             throw("Error en la conexion");
//         }
//         console.log("Conectado a la base de datos correctamente");
//     });
// });
//lanza o ejecuta elq servidor web
app.listen(PUERTO, () => {
    console.log("servidor corriendo perfectamente => localhost 3700");
});
