import fs from 'fs';
class CreatePublic {
    static create(){
        new Promise((resolve, reject) =>{
            fs.mkdir('docs',(err)=>{
                if(err) throw err;
                fs.mkdir('docs/static',(err)=>{
                    resolve();
                })
            })
        })
    }
}
export default CreatePublic;