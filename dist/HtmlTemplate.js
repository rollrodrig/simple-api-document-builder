"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const cheerio_1 = __importDefault(require("cheerio"));
class HtmlTemplate {
    static create(template) {
        return new Promise((resolve, reject) => {
            let tmp = template || 'base/example.html';
            fs_1.default.readFile(tmp, 'utf8', (err, fd) => {
                if (err)
                    throw err;
                const $ = cheerio_1.default.load(fd);
                resolve($);
            });
        });
    }
}
exports.default = HtmlTemplate;
// fs.readFile('public/__example.html','utf8', (err, data) => {
//     if (err) throw err;
//     const $ = cheerio.load(data)
//     $('#api_title').text('Hello there');
//     fs.writeFile('public/example.html', $.html(), 'utf8', (err)=>{
//         if (err) throw err;
//     });
// });
