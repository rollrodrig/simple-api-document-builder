import { expect, assert } from 'chai';
import NavBarBuilder from './NavBarBuilder';
describe('NavBarBuilder: ', () => {
    it('.create', async () => {
        let items = ['user_api.json','post-name_all.json','comments.json'];
        let expected = `<li><a href="">Api</a></li><li><a href="user-api.html">user api</a></li><li><a href="post-name-all.html">post name all</a></li><li><a href="comments.html">comments</a></li>`;
        let html = NavBarBuilder.create(items);
        assert.isString(html);
        expect(html).eq(expected)
    });
});