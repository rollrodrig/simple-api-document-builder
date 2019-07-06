"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileInfo_1 = __importDefault(require("./FileInfo"));
class NavBarBuilder {
    static create(items) {
        let html = `<li><a href="">Api</a></li>`;
        items.map((item) => {
            let name = FileInfo_1.default.get(item);
            html += `<li><a href="${name.href}">${name.name}</a></li>`;
        });
        return html;
    }
}
exports.default = NavBarBuilder;
