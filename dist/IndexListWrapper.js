"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexListWrapper {
    static wrap(html) {
        return `
            <table class="fy-tbl -s">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Description</th>
                    </tr>
                    ${html}
                </tbody>
            </table>
        `;
    }
}
exports.default = IndexListWrapper;
