"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexList {
    static add(fileinfo, currentFile) {
        return `
        <tr>
            <td><a href="${fileinfo.href}">${currentFile.title}</a></td>
            <td><a href="${fileinfo.href}">${currentFile.path}</a></td>
            <td>${currentFile.description}</td>
        </tr>
        `;
    }
}
exports.default = IndexList;
