import { expect, assert } from 'chai';
import fs from 'fs-promise';
import ReadJsonFiles from './ReadJsonFiles';
describe('ReadJsonFiles: ', () => {
	it('should return json files names in array ', async () => {
        let files = await ReadJsonFiles.read('api');
        assert.isArray(files);
        assert.isString(files[0]);
    });
});