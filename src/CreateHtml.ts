import fs from 'fs';
class CreateHtml {
    static create(file:string,content:string){
        return new Promise((resolve, reject)=>{
            fs.writeFile(`${file}`, content, function(err) {
                if(err) throw err;
                resolve();
            }); 
        })
    }
}
export default CreateHtml;