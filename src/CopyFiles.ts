import fse from 'fs-extra';
class CopyFiles {
    static copy(){
        return new Promise((resolve, reject)=>{
            fse.copy('base/static','public/static', (err) => {
                if (err) throw err;
                resolve();
            });
        })
    }
}
export default CopyFiles;