import { expect, assert } from 'chai';
import HtmlTemplate from './HtmlTemplate';
describe('HtmlTemplate: ', () => {
	it('shuld return cherio object', async () => {
        let $ = await HtmlTemplate.create();
        assert.isFunction($);
        assert.isString($.html());
    });
});