"use strict";
// import {Skill} from '../models1/skill';
// // import {connection} from '../../index';
// export class SkillDTO{
//       static getAll():Promise<any>{
//         let query="select * from t_skill";
//         return new Promise((resolve, reject)=>{
//             connection.query(query,(error:any,result:any)=>{            
//                 if(error)
//                 {
//                     reject(error);
//                 }
//                 let skills:Array<Skill>=[];
//                 if(result.length===0)
//                 {
//                     resolve(skills);
//                 }
//                 result.forEach((skillDB:any) => {
//                     let skill:Skill=new Skill();
//                     skill.SKILL_ID=skillDB.skill_id;    
//                     skills.push(skill);
//                 });
//                 console.log(result);
//                 resolve(skills);                
//             });
//         });
//     }
//     static create(skill:Skill):Promise<any>{
//     //    let query="INSERT INTO t_skill (skill_nom, skill_desc, skill_img) values ('"+skill.SKILL_NOM+"', '"+skill.SKILL_DESC+"', '"+skill.SKILL_IMG+"')";
//        let query="call codijob.t_skill_crud_ps(0,'"+skill.SKILL_NOM+"', '"+skill.SKILL_DESC+"', '"+skill.SKILL_IMG+"', 'create')";
//        return new Promise((resolve,reject)=>{
//         connection.query(query,(error:any, result:any)=>{
//             if (error){
//                reject("error");
//             }                       
//                 // skill.SKILL_ID=result.insertId;
//                 skill.SKILL_ID=result[0][0].skill_id;
//                 resolve(skill);
//                 console.log("OBJETO CREADO");
//                 console.log(skill);
//                 console.log(result);
//         });
//        });      
//     }
//     static update(skill:Skill):Promise<any>{
//         let query="UPDATE t_skill SET skill_nom ='"+skill.SKILL_NOM+"', skill_desc='"+skill.SKILL_DESC+"', skill_img='"+skill.SKILL_IMG+"' WHERE skill_id='"+skill.SKILL_ID+"'";
//         return new Promise((resolve,reject)=>{
//         connection.query(query,(error:any, result:any)=>{
//              if (error){
//                  console.log("ERROR AL EJECUTAR");
//                  console.log(query); 
//                  reject(error);
//              }
//              console.log("OBJETO ACTULIZADO");
//              console.log(skill);
//              resolve(skill);
//              });
//          });
//      }
//      static delete(skill:Skill){
//         let query="DELETE FROM t_skill WHERE skill_id='"+skill.SKILL_ID+"'";
//         connection.query(query,(error:any, result:any)=>{
//              if (error){
//                  console.log("ERROR AL EJECUTAR");
//                  console.log(query); 
//              }
//              console.log("OBJETO ELIMINADO");
//              console.log(skill);
//          });
//         }
// }
