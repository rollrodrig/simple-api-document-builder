"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pretty_error_1 = __importDefault(require("pretty-error"));
const chalk_1 = __importDefault(require("chalk"));
var pe = new pretty_error_1.default();
class ValidateJsonContent {
    static eval(file, jsonContent) {
        let err;
        if (jsonContent.hasOwnProperty('title') === false) {
            err = chalk_1.default.white.bgRed(' Error: ') + chalk_1.default.blue(` "title" `) + chalk_1.default.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
        if (jsonContent.hasOwnProperty('method') === false) {
            err = chalk_1.default.white.bgRed(' Error: ') + chalk_1.default.blue(` "method" `) + chalk_1.default.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
        if (jsonContent.hasOwnProperty('path') === false) {
            err = chalk_1.default.white.bgRed(' Error: ') + chalk_1.default.blue(` "path" `) + chalk_1.default.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
        if (jsonContent.hasOwnProperty('response') === false) {
            err = chalk_1.default.white.bgRed(' Error: ') + chalk_1.default.blue(` "response" `) + chalk_1.default.cyan(` key is required in file >>> api/${file}`);
            console.log(err);
            process.exit();
        }
    }
}
exports.default = ValidateJsonContent;
