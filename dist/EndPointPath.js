"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EndPointPath {
    static create(method, path) {
        return `<span class="epm">${method}</span>&nbsp;&nbsp;<span class="ep">${path}</span>`;
    }
}
exports.default = EndPointPath;
