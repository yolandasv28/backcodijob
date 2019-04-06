"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = require("../models/skill");
const proyecto_1 = require("../models/proyecto");
const proyectoskill_1 = require("../models/proyectoskill");
const imagenproyecto_1 = require("../models/imagenproyecto");
const empresa_1 = require("../models/empresa");
const usuemp_1 = require("../models/usuemp");
const persona_1 = require("../models/persona");
const usuario_1 = require("../models/usuario");
const usuarioproyecto_1 = require("../models/usuarioproyecto");
const usuarioskill_1 = require("../models/usuarioskill");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('qGP7mryqnb', 'qGP7mryqnb', 'N3sz00jp0a', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '-5:00',
});
exports.Skill = skill_1.skill_model(sequelize, Sequelize);
exports.proyecto = proyecto_1.proyecto_model(sequelize, Sequelize);
exports.proyectoskill = proyectoskill_1.proyectoskill_model(sequelize, Sequelize);
exports.imagenproyecto = imagenproyecto_1.imagenproyecto_model(sequelize, Sequelize);
exports.empresa = empresa_1.empresa_model(sequelize, Sequelize);
exports.usuemp = usuemp_1.usuemp_model(sequelize, Sequelize);
exports.persona = persona_1.persona_model(sequelize, Sequelize);
exports.usuario = usuario_1.usuario_model(sequelize, Sequelize);
exports.usuarioproyecto = usuarioproyecto_1.usuarioproyecto_model(sequelize, Sequelize);
exports.usuarioskill = usuarioskill_1.usuarioskill_model(sequelize, Sequelize);
//crea una clave foránea en la tabla proyectoskill de la tabla skill
exports.proyectoskill.belongsTo(exports.Skill, { foreignKey: 'skill_id' });
exports.proyectoskill.belongsTo(exports.proyecto, { foreignKey: 'pro_id' });
exports.imagenproyecto.belongsTo(exports.proyecto, { foreignKey: 'pro_id' });
exports.usuarioskill.belongsTo(exports.usuario, { foreignKey: 'usu_id' });
exports.usuarioskill.belongsTo(exports.Skill, { foreignKey: 'skill_id' });
exports.usuarioproyecto.belongsTo(exports.proyecto, { foreignKey: 'pro_id' });
exports.usuarioproyecto.belongsTo(exports.usuario, { foreignKey: 'usu_id' });
exports.usuemp.belongsTo(exports.usuario, { foreignKey: 'usu_id' });
exports.usuemp.belongsTo(exports.empresa, { foreignKey: 'emp_id' });
exports.usuario.belongsTo(exports.persona, { foreignKey: 'per_id' });
//force=>true; cada vez que el proyecto inicie (npm start)
//       toda la data y tablas se van a borrar y crear nuevamente sin datos.
//force=>false; solo va a crear las tablas y/o campos que no figure actualmente
//       en nuestra base de dtos, los datosno se van a borrar.
//force=true => borra primero las tablas
//force=false=> crea la tabla si no existe
//raw:true => sirve para hacer consultas directas a la base de datos sin ORM.
sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(() => {
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con éxito");
    }).catch(() => {
        console.log("Error al crear la Base de datos");
    });
});
