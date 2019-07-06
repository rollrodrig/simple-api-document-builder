import { expect, assert } from 'chai';
import IndexList from './IndexList';
import { TFileInfo } from './FileInfo';
import { TJsonContent } from './ReadJsonContent';
describe('IndexList: ', () => {
    it('.add', async () => {
        let fileinfo: TFileInfo = {
            href:"comments.html",
            name:"comments",
        }
        let currentFile: TJsonContent = {
            title:"All comments by post",
            description:"Description...",
            method:"post",
            path:"/api/v1/post/{id}/comments/",
            path_info:"Path_info...",
            parameters:[],
            header:{},
            body:{},
            response:{},
            error:{},
        }
        let row = IndexList.add(fileinfo, currentFile);
    });
});