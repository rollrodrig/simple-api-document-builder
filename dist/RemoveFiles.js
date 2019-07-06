"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const rimraf_1 = __importDefault(require("rimraf"));
const chalk_1 = __importDefault(require("chalk"));
class RemoveFiles {
    static remove() {
        return new Promise((resolve, reject) => {
            fs_1.default.access("public", fs_1.default.constants.F_OK, (err) => {
                console.log(chalk_1.default.yellow(`public directory verification...`));
                if (err) {
                    console.log(chalk_1.default.yellow(`public not exist, skip removing...`));
                    resolve();
                }
                else {
                    rimraf_1.default("public", (err) => {
                        if (err)
                            throw err;
                        console.log(chalk_1.default.blue(`removing public directory...`));
                        resolve();
                    });
                }
            });
        });
    }
}
exports.default = RemoveFiles;
