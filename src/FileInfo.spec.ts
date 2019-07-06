import { expect, assert } from 'chai';
import FileInfo from './FileInfo';
describe('FileInfo: ', () => {
	it('.get', async () => {
        expect(FileInfo.get("my-name.json"))
            .to.deep.eq({href:"my-name.html",name:"my name"});
        expect(FileInfo.get("my_name_is-very_long.json"))
            .to.deep.eq({href:"my-name-is-very-long.html",name:"my name is very long"});
    });
});