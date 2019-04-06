"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProyectoSkill {
    constructor() {
        this.proskill_id = 0;
        this.pro_id = 0;
        this.skill_id = 0;
    }
    get PROSKILL_ID() {
        return this.proskill_id;
    }
    set PROSKILL_ID(proskill_id) {
        this.proskill_id = proskill_id;
    }
    get PRO_ID() {
        return this.pro_id;
    }
    set PRO_ID(pro_id) {
        this.pro_id = pro_id;
    }
    get SKILL_ID() {
        return this.skill_id;
    }
    set SKILL_ID(skill_id) {
        this.skill_id = skill_id;
    }
}
exports.ProyectoSkill = ProyectoSkill;
