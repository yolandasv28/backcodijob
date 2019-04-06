"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.empresa_model = (sequelize, type) => {
    return sequelize.define("t_empresa", {
        emp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        emp_img: {
            type: type.STRING,
        },
        emp_nomb: {
            type: type.STRING,
        }
    }, {
        timestamps: true,
        tableName: 't_empresa'
    });
};
