"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImagenProyecto {
    constructor() {
        this.imgpro_id = 0;
        this.imgpro_url = "";
        this.pro_id = 0;
    }
    get IMGPRO_ID() {
        return this.imgpro_id;
    }
    set IMGPRO_ID(imgpro_id) {
        this.imgpro_id = imgpro_id;
    }
    get IMGPRO_URL() {
        return this.imgpro_url;
    }
    set IMGPRO_URL(imgpro_url) {
        this.imgpro_url = imgpro_url;
    }
    get PRO_ID() {
        return this.pro_id;
    }
    set PRO_ID(pro_id) {
        this.pro_id = pro_id;
    }
}
exports.ImagenProyecto = ImagenProyecto;
