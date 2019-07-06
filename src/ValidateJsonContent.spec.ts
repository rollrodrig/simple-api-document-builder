import { expect, assert } from 'chai';
import ValidateJsonContent from './ValidateJsonContent';
describe('ValidateJsonContent: ', () => {
    it('should not throw error', async () => {
        let jsonContent = {
            title:"All comments by post",
            method:"post",
            path:"/api/v1/post/{id}/comments/",
            response:{},
        }
        expect(()=>{ValidateJsonContent.eval("post.json", <any>jsonContent)})
            .not.throw();
    });
    it('should throw error', async () => {
        let jsonContent = {
            title:"All comments by post",
            method:"post",
            path:"/api/v1/post/{id}/comments/",
            // response:{},
        }
        expect(()=>{ValidateJsonContent.eval("post.json", <any>jsonContent)})
            .throw();
    });    
});