"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_empresa = {
    getAll: (req, res) => {
        // EmpresaDTO.getAll();
        res.send("Entregando todas las empresas");
    },
    updatebyid: (req, res) => {
        res.send("Actualizando una empresa dado su ID");
    },
    deletebyid: (req, res) => {
        res.send("Eliminando una empresa segun su ID");
    },
    create: (req, res) => {
        res.send("Creando una nueva empresa");
    }
};
