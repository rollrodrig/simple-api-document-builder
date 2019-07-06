"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileInfo {
    static get(item) {
        let href = item.replace(".json", "").replace(/_/g, "-");
        let name = href.replace(/-/g, " ");
        return {
            href: href + ".html",
            name: name,
        };
    }
}
exports.default = FileInfo;
