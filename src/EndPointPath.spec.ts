import { expect, assert } from 'chai';
import EndPointPath from './EndPointPath';
describe('EndPointPath: ', () => {
	it('create', async () => {
        let path = EndPointPath.create('post', '/api/v1/user');
        expect(path).to.eq('<span class="epm">post</span>&nbsp;&nbsp;<span class="ep">/api/v1/user</span>');
    });
});
