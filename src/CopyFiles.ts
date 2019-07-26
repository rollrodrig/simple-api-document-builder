import fse from 'fs-extra';
import chalk from 'chalk';
class CopyFiles {
    static copy(){
        return new Promise((resolve, reject)=>{
            fse.copy('src/base/static','public/static', (err) => {
                if (err) throw err;
                console.log(chalk.green(`copying base files...`));
                resolve();
            });
        })
    }
}
export default CopyFiles;