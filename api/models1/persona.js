"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor() {
        this.per_id = 0;
        this.per_nom = "";
        this.per_ape = "";
        this.per_mail = "";
        this.per_tel = "";
        this.per_dni = "";
        this.per_fnac = "";
    }
    get PER_ID() {
        return this.per_id;
    }
    set PER_ID(per_id) {
        this.per_id = per_id;
    }
    get PER_NOM() {
        return this.per_nom;
    }
    set PER_NOM(per_nom) {
        this.per_nom = per_nom;
    }
    get PER_APE() {
        return this.per_ape;
    }
    set PER_APE(per_ape) {
        this.per_ape = per_ape;
    }
    get PER_MAIL() {
        return this.per_mail;
    }
    set PER_MAIL(per_mail) {
        this.per_mail = per_mail;
    }
    get PER_TEL() {
        return this.per_tel;
    }
    set PER_TEL(per_tel) {
        this.per_tel = per_tel;
    }
    get PER_DNI() {
        return this.per_dni;
    }
    set PER_DNI(per_dni) {
        this.per_dni = per_dni;
    }
    get PER_FNAC() {
        return this.per_fnac;
    }
    set PER_FNAC(per_fnac) {
        this.per_fnac = per_fnac;
    }
}
exports.Persona = Persona;
