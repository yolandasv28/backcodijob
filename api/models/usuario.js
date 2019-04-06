"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
//Definiendo un modelo
//sequelize => es la conexión a la base de datos
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
exports.usuario_model = (sequelize, type) => {
    let usuarioModel = sequelize.define("t_usuario", {
        usu_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false,
        },
        usu_tipo: {
            type: type.STRING,
            alowNull: true,
            defaultValue: 'tipo por defecto'
        },
        usu_hash: {
            type: type.TEXT,
            alowNull: true,
            defaultValue: 'hash por defecto'
        },
        usu_salt: {
            type: type.TEXT,
            alowNull: true,
            defaultValue: 'tipo por defecto'
        },
        usu_img: {
            type: type.STRING,
            alowNull: true,
            defaultValue: 'Img por defecto'
        },
        usu_lng: {
            type: type.STRING,
            alowNull: true,
            defaultValue: '0'
        },
        usu_lat: {
            type: type.STRING,
            alowNull: true,
            defaultValue: '0'
        },
        usu_git: {
            type: type.STRING,
            alowNull: true,
            defaultValue: 'www.git.com'
        },
        usu_www: {
            type: type.STRING,
            alowNull: true,
            defaultValue: 'www.web.com'
        },
        usu_fb: {
            type: type.STRING,
            alowNull: true,
            defaultValue: 'www.fb.com'
        }
    }, {
        timestamps: true,
        tableName: 't_usuario'
    });
    usuarioModel.prototype.setPassword = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString("hex");
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    usuarioModel.prototype.validatePassword = function (password) {
        var hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        return hash === this.usu_hash;
    };
    usuarioModel.prototype.generateJWT = function () {
        return new Promise((resolve, reject) => {
            sequelize_1.persona.findById(this.per_id).then((personaEncontrada) => {
                let payload = {
                    usu_id: this.usu_id,
                    per_nom_ape: personaEncontrada.per_nombre + " " + personaEncontrada.per_apellido,
                    per_email: personaEncontrada.per_email
                };
                console.log("PAYLOAD " + payload);
                let token = jwt.sign(payload, 'clave', { expiresIn: '1h' });
                resolve(token);
            });
        });
    };
    return usuarioModel;
};
