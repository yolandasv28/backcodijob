"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.usuemp_model = (sequelize, type) => {
    return sequelize.define("t_usuemp", {
        usuemp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        usuemp_cargo: {
            type: type.STRING,
        },
        usuemp_fechin: {
            type: type.STRING,
        },
        usuemp_fechfin: {
            type: type.STRING,
        },
        usuemp_dec: {
            type: type.TEXT,
        }
    }, {
        timestamps: true,
        tableName: 't_usuemp'
    });
};
