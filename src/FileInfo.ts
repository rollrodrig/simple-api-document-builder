export interface TFileInfo {
    href:string,
    name:string,
}
class FileInfo {
    static get(item:string):TFileInfo {
        let href = item.replace(".json", "").replace(/_/g, "-");
        let name = href.replace(/-/g, " ");
        return {
            href: href+".html",
            name: name,
        }
    }
}
export default FileInfo;
