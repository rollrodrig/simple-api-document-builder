import fs from 'fs';
class CreatePublic {
    static create(){
        new Promise((resolve, reject) =>{
            fs.mkdir('public',(err)=>{
                if(err) throw err;
                fs.mkdir('public/static',(err)=>{
                    resolve();
                })
            })
        })
    }
}
export default CreatePublic;