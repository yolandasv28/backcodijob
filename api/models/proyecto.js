"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.proyecto_model = (sequelize, type) => {
    return sequelize.define("t_proyecto", {
        pro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        pro_nom: {
            type: type.STRING,
            alowNull: false,
        },
        pro_desc: {
            type: type.TEXT,
            alowNull: false,
        },
        pro_fechin: {
            type: type.STRING,
            alowNull: false,
        },
        pro_fechfin: {
            type: type.TEXT,
            alowNull: false,
        }
    }, {
        timestamps: true,
        tableName: "t_proyecto"
    });
};
