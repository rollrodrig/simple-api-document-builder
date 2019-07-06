import FileInfo, { TFileInfo } from "./FileInfo";
class NavBarBuilder {
    static create(items:string[]){
        let html:string = `<li><a href="">Routes</a></li>`;
        items.map((item:string)=>{
            let name:TFileInfo  = FileInfo.get(item);
            html +=`<li><a href="${name.href}">${name.name}</a></li>`;
        });
        return html;
    }
}
export default NavBarBuilder;
