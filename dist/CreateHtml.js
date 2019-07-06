"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class CreateHtml {
    static create(file, content) {
        return new Promise((resolve, reject) => {
            fs_1.default.writeFile(`${file}`, content, function (err) {
                if (err)
                    throw err;
                resolve();
            });
        });
    }
}
exports.default = CreateHtml;
