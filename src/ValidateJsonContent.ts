import { TJsonContent } from "./ReadJsonContent";

class ValidateJsonContent {
    static eval(file: string, jsonContent: TJsonContent){
        if(jsonContent.hasOwnProperty('title') === false){
            throw new Error(`title key is required in file >>> api/${file}`);
        }
        if(jsonContent.hasOwnProperty('method') === false){
            throw new Error(`method key is required in file >>> api/${file}`);
        }
        if(jsonContent.hasOwnProperty('path') === false){
            throw new Error(`path key is required in file >>> api/${file}`);
        }
        if(jsonContent.hasOwnProperty('response') === false){
            throw new Error(`response key is required in file >>> api/${file}`);
        }
    }
}

export default ValidateJsonContent;