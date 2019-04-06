"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {connection} from '../../index';
class EmpresaDTO {
    static getAll() {
        let query = "select * from t_empresa";
        // connection.query(query,(error:any,result:any)=>{
        //     console.log(result);
        // });
    }
}
exports.EmpresaDTO = EmpresaDTO;
