"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor() {
        this.emp_id = 0;
        this.emp_nom = "";
        this.emp_img = "";
    }
    get EMP_ID() {
        return this.emp_id;
    }
    set EMP_ID(emp_id) {
        this.emp_id = emp_id;
    }
    get EMP_NOM() {
        return this.emp_nom;
    }
    set EMP_NOM(emp_nom) {
        this.emp_nom = emp_nom;
    }
    get EMP_IMG() {
        return this.emp_img;
    }
    set EMP_IMG(emp_img) {
        this.emp_img = emp_img;
    }
}
exports.Empresa = Empresa;
