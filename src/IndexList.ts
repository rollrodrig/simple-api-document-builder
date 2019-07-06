import { TJsonContent } from "./ReadJsonContent";
import { TFileInfo } from "./FileInfo";
class IndexList {
    static add(fileinfo:TFileInfo, currentFile:TJsonContent){
        return `
        <tr>
            <td><a href="${fileinfo.href}">${currentFile.title}</a></td>
            <td><a href="${fileinfo.href}">${currentFile.path}</a></td>
            <td>${currentFile.description}</td>
        </tr>
        `;
    }
}
export default IndexList;