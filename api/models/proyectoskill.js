"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.proyectoskill_model = (sequelize, type) => {
    return sequelize.define("t_proyectoskill", {
        proskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
    }, {
        timestamps: true,
        tableName: 't_proyectoskill'
    });
};
