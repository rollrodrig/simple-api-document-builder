import { expect, assert } from 'chai';
import ReadJsonContent from './ReadJsonContent';
describe('ReadJsonContent: ', () => {
    it('.create', async () => {
        let obj = await ReadJsonContent.read('api/posts.json');
        assert.isObject(obj);
    });
});