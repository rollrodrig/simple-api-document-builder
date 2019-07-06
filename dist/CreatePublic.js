"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class CreatePublic {
    static create() {
        new Promise((resolve, reject) => {
            fs_1.default.mkdir('public', (err) => {
                if (err)
                    throw err;
                fs_1.default.mkdir('public/static', (err) => {
                    resolve();
                });
            });
        });
    }
}
exports.default = CreatePublic;
