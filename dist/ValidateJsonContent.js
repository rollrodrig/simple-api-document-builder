"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateJsonContent {
    static eval(file, jsonContent) {
        if (jsonContent.hasOwnProperty('title') === false) {
            throw new Error(`title key is required in file >>> api/${file}`);
        }
        if (jsonContent.hasOwnProperty('method') === false) {
            throw new Error(`method key is required in file >>> api/${file}`);
        }
        if (jsonContent.hasOwnProperty('path') === false) {
            throw new Error(`path key is required in file >>> api/${file}`);
        }
        if (jsonContent.hasOwnProperty('response') === false) {
            throw new Error(`response key is required in file >>> api/${file}`);
        }
    }
}
exports.default = ValidateJsonContent;
