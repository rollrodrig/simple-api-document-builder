import { TJsonContent } from "./ReadJsonContent";
import PrettyError  from 'pretty-error';
import chalk from 'chalk';
var pe = new PrettyError();
class ValidateJsonContent {
    static eval(file: string, jsonContent: TJsonContent){
        let err;
        if(jsonContent.hasOwnProperty('title') === false){
            err = chalk.white.bgRed(' Error: ') + chalk.blue(` "title" `) + chalk.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
        if(jsonContent.hasOwnProperty('method') === false){
            err = chalk.white.bgRed(' Error: ')+chalk.blue(` "method" `)+ chalk.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
        if(jsonContent.hasOwnProperty('path') === false){
            err = chalk.white.bgRed(' Error: ')+chalk.blue(` "path" `)+ chalk.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
        if(jsonContent.hasOwnProperty('response') === false){
            err = chalk.white.bgRed(' Error: ')+chalk.blue(` "response" `)+ chalk.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
    }
}

export default ValidateJsonContent;