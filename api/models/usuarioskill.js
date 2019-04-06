"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.usuarioskill_model = (sequelize, type) => {
    return sequelize.define("t_usuarioskill", {
        uskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        uskill_lvl: {
            type: type.INTEGER,
        }
    }, {
        timestamps: true,
        tableName: 't_usuarioskill'
    });
};
