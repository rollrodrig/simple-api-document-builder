"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class ReadJsonContent {
    static read(path) {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(path, 'utf8', (err, content) => {
                if (err)
                    throw err;
                resolve(JSON.parse(content));
            });
        });
    }
}
exports.default = ReadJsonContent;
