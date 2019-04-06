"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skill {
    constructor() {
        this.skill_id = 0;
        this.skill_nom = "";
        this.skill_img = "";
        this.skill_desc = "";
    }
    get SKILL_ID() {
        return this.skill_id;
    }
    set SKILL_ID(skill_id) {
        this.skill_id = skill_id;
    }
    get SKILL_NOM() {
        return this.skill_nom;
    }
    set SKILL_NOM(skill_nom) {
        this.skill_nom = skill_nom;
    }
    get SKILL_DESC() {
        return this.skill_desc;
    }
    set SKILL_DESC(skill_desc) {
        this.skill_desc = skill_desc;
    }
    get SKILL_IMG() {
        return this.skill_img;
    }
    set SKILL_IMG(skill_img) {
        this.skill_img = skill_img;
    }
}
exports.Skill = Skill;
