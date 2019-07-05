import rimraf from "rimraf";
class RemoveFiles {
    static remove(){
        return new Promise((resolve, reject) =>{
            rimraf("public", (err)=>{
                if(err) throw err;
                resolve();
            });
        })
    }
}
export default RemoveFiles;