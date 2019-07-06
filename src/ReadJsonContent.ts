import fs from "fs";
import { TParam } from './ParamTableBuilder';
export interface TJsonContent {
    title:string,
    description?:string,
    method:string,
    path:string,
    path_info?:string,
    parameters?: TParam[],
    header?:any,
    body:any,
    response:any,
    error?:any,
}
class ReadJsonContent {
    static read(path:string):Promise<TJsonContent> {
        return new Promise((resolve, reject)=>{
            fs.readFile(path,'utf8',(err,content)=>{
                if(err) throw err;
                resolve(JSON.parse(content));
            });
        });
    }
}
export default ReadJsonContent;