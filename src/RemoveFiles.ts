import fs from 'fs';
import rimraf from "rimraf";
import chalk from 'chalk';
class RemoveFiles {
    static remove(){
        return new Promise((resolve, reject) =>{
            fs.access("docs",fs.constants.F_OK, (err)=>{
                console.log(chalk.yellow(`docs directory verification...`));
                if(err) {
                    console.log(chalk.yellow(`docs not exist, skip removing...`));
                    resolve();
                }else {
                    rimraf("docs", (err)=>{
                        if(err) throw err;
                        console.log(chalk.blue(`removing docs directory...`));
                        resolve();
                    });
                }
            })
        })
    }
}
export default RemoveFiles;