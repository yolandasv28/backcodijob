"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor() {
        this.usu_id = 0;
        this.usu_tipo = "";
        this.usu_hash = "";
        this.usu_salt = "";
        this.usu_img = "";
        this.usu_lng = "";
        this.usu_lat = "";
        this.usu_git = "";
        this.usu_www = "";
        this.usu_fb = "";
        this.per_id = 0;
    }
    get USU_ID() {
        return this.usu_id;
    }
    set USU_ID(usu_id) {
        this.usu_id = usu_id;
    }
    get USU_TIPO() {
        return this.usu_tipo;
    }
    set USU_TIPO(usu_tipo) {
        this.usu_tipo = usu_tipo;
    }
    get USU_HASH() {
        return this.usu_hash;
    }
    set USU_HASH(usu_hash) {
        this.usu_hash = usu_hash;
    }
    get USU_SALT() {
        return this.usu_salt;
    }
    set USU_SALT(usu_salt) {
        this.usu_salt = usu_salt;
    }
    get USU_IMG() {
        return this.usu_img;
    }
    set USU_IMG(usu_img) {
        this.usu_img = usu_img;
    }
    get USU_LNG() {
        return this.usu_lng;
    }
    set USU_LNG(usu_lng) {
        this.usu_lng = usu_lng;
    }
    get USU_LAT() {
        return this.usu_lat;
    }
    set USU_LAT(usu_lat) {
        this.usu_lat = usu_lat;
    }
    get USU_GIT() {
        return this.usu_git;
    }
    set USU_GIT(usu_git) {
        this.usu_git = usu_git;
    }
    get USU_WWW() {
        return this.usu_www;
    }
    set USU_WWW(usu_www) {
        this.usu_www = usu_www;
    }
    get USU_FB() {
        return this.usu_fb;
    }
    set USU_FB(usu_fb) {
        this.usu_fb = usu_fb;
    }
    get PER_ID() {
        return this.per_id;
    }
    set PER_ID(per_id) {
        this.per_id = per_id;
    }
}
exports.Usuario = Usuario;
