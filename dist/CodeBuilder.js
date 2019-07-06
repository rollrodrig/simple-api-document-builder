"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prettify_json_1 = __importDefault(require("prettify-json"));
class CodeBuilder {
    static create(code) {
        let html = `
        <pre><code class="json">
${prettify_json_1.default(code)}
        </code></pre>`;
        return html;
    }
}
exports.default = CodeBuilder;
