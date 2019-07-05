import cheerio from 'cheerio';
class NavBarBuilder {
    static cleanName(item:string){
        let href = item.replace(".json", "").replace(/_/g, "-");
        let name = href.replace(/-/g, " ");
        return {
            href: href,
            name: name,
        }
    }
    static create(items:string[]){
        let html:string = `<li><a href="">Api</a></li>`;
        items.map((item:string)=>{
            let name  = NavBarBuilder.cleanName(item);
            html +=`<li><a href="${name.href}.html">${name.name}</a></li>`;
        });
        return html;
    }
}

export default NavBarBuilder;
