"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.skill_model = (sequelize, type) => {
    return sequelize.define("t_skill", {
        skill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        skill_nom: type.STRING,
        skill_desc: type.STRING,
        skill_img: type.STRING,
    }, {
        timestamps: true,
        tableName: "t_skill"
    });
};
