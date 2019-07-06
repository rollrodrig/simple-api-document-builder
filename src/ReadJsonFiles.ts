import fs from 'fs';
class ReadJsonFiles {
    static read(path:string):Promise<string[]> {
        return new Promise( async (resolve, reject)=>{
            fs.readdir(path,'utf8',(err,files)=>{
                if(err) throw err;
                let f  = files.filter((f)=> /(.)+(\.json)$/.test(f))
                resolve(f)
            });
        })
    }
}
export default ReadJsonFiles;

                // for( var i = 0; i < files.length; i++){ 
                //     if(/(.)+(\.json)$/.test(files[i]) === false) {
                //         files.splice(i, 1); 
                //     }
                // }