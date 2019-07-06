"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
class CopyFiles {
    static copy() {
        return new Promise((resolve, reject) => {
            fs_extra_1.default.copy('base/static', 'public/static', (err) => {
                if (err)
                    throw err;
                console.log(chalk_1.default.green(`copying base files...`));
                resolve();
            });
        });
    }
}
exports.default = CopyFiles;
