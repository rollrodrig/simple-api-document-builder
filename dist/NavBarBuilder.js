"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NavBarBuilder {
    static cleanName(item) {
        let href = item.replace(".json", "").replace(/_/g, "-");
        let name = href.replace(/-/g, " ");
        return {
            href: href + ".html",
            name: name,
        };
    }
    static create(items) {
        let html = `<li><a href="">Api</a></li>`;
        items.map((item) => {
            let name = NavBarBuilder.cleanName(item);
            html += `<li><a href="${name.href}">${name.name}</a></li>`;
        });
        return html;
    }
}
exports.default = NavBarBuilder;
