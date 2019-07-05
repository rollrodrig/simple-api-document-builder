import fs from 'fs';
import ncp  from 'ncp';
ncp.limit = 16;
class CreatePublic {
    static create(){
        new Promise((resolve, reject) =>{
            fs.mkdir('public',(err)=>{
                if(err) throw err;
                fs.mkdir('public/static',(err)=>{
                    ncp('base/static','public/static', (err) => {
                        if (err) throw err;
                        resolve();
                    });
                })
            })
        })
    }
}
export default CreatePublic;