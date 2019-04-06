"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagenproyecto_model = (sequelize, type) => {
    return sequelize.define("t_imagenproyecto", {
        imgpro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        imgpro_url: {
            type: type.STRING,
        }
    }, {
        timestamps: true,
        tableName: "t_imagenproyecto"
    });
};
