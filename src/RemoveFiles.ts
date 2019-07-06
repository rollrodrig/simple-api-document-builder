import fs from 'fs';
import rimraf from "rimraf";
import chalk from 'chalk';
class RemoveFiles {
    static remove(){
        return new Promise((resolve, reject) =>{
            fs.access("public",fs.constants.F_OK, (err)=>{
                console.log(chalk.yellow(`public directory verification...`));
                if(err) {
                    console.log(chalk.yellow(`public not exist, skip removing...`));
                    resolve();
                }else {
                    rimraf("public", (err)=>{
                        if(err) throw err;
                        console.log(chalk.blue(`removing public directory...`));
                        resolve();
                    });
                }
            })
        })
    }
}
export default RemoveFiles;