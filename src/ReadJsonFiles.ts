import fs from 'fs';
class ReadJsonFiles {
    static read(path:string):Promise<string[]> {
        return new Promise( async (resolve, reject)=>{
            fs.readdir(path,'utf8',(err,files)=>{
                if(err) throw err;
                resolve(files)
            });
        })
    }
}
export default ReadJsonFiles;