"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_home = {
    home: function (req, res) {
        res.send("HOLA SOY EL SERVIDOR");
    },
    otraruta: function (req, res) {
        res.send("HOLA SOY EL SERVIDOR");
    }
};
// si usamos module.exports=controller_home;
// en otro archivo lo importamos como:
// => var [nombre_cualquiera]=require([ruta_del_archivo]);
// si usamos
// => exports var controller_home=...
// En otro archivo lo importamos como:
// => Import{controller_home} from 'ruta_del_archivo'
module.exports = controller_home;
