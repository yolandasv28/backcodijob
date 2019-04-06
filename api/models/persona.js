"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
exports.persona_model = (sequelize, type) => {
    let personaModel = sequelize.define("t_persona", {
        per_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        per_nombre: {
            type: type.STRING,
            alowNull: true,
            defaultValue: "sin nombre"
        },
        per_apellido: {
            type: type.STRING,
            alowNull: true,
            defaultValue: "sin apellido"
        },
        per_email: {
            type: type.STRING,
            alowNull: true,
            defaultValue: "sin email",
            unique: true
        },
        per_tel: {
            type: type.STRING,
            alowNull: true,
            defaultValue: "sin telefono"
        },
        per_dni: {
            type: type.STRING,
            alowNull: true,
            defaultValue: "sin dni"
        },
        per_fechnac: {
            type: type.DATE,
            alowNull: true,
            defaultValue: new Date()
        }
    }, {
        timestamps: true,
        tableName: 't_persona'
    });
    personaModel.prototype.saludar = function () {
        console.log(this.per_nombre + " te saluda");
    };
    return personaModel;
};
