import { expect, assert } from 'chai';
import NavBarBuilder from './NavBarBuilder';
describe('NavBarBuilder: ', () => {
	it('.cleanName', async () => {
        expect(NavBarBuilder.cleanName("my-name.json"))
            .to.deep.eq({href:"my-name.html",name:"my name"});
        expect(NavBarBuilder.cleanName("my_name_is-very_long.json"))
            .to.deep.eq({href:"my-name-is-very-long.html",name:"my name is very long"});
    });
    it('.create', async () => {
        let items = ['user_api.json','post-name_all.json','comments.json'];
        let expected = `<li><a href="">Api</a></li><li><a href="user-api.html">user api</a></li><li><a href="post-name-all.html">post name all</a></li><li><a href="comments.html">comments</a></li>`;
        let html = NavBarBuilder.create(items);
        assert.isString(html);
        expect(html).eq(expected)
    });

});