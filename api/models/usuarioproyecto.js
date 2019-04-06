"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.usuarioproyecto_model = (sequelize, type) => {
    return sequelize.define("t_usuarioproyecto", {
        usupro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        usupro_rol: {
            type: type.STRING,
        }
    }, {
        timestamps: true,
        tableName: 't_usuarioproyecto'
    });
};
