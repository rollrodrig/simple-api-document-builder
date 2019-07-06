import { expect, assert } from 'chai';
import fs from 'fs';
import ReadJsonFiles from './ReadJsonFiles';
import sinon from 'sinon';

describe('ReadJsonFiles: ', () => {
    beforeEach(()=>{
        sinon.restore()
    })
	it('should return array json files', async () => {
        let stub = sinon.stub(fs, "readdir").callsFake((path,utf,cb)=>{
            cb(null, <any>['user.json','comments.json'])
        })
        let files = await ReadJsonFiles.read('api');
        assert.isArray(files);
        expect(files).to.deep.equal(['user.json','comments.json'])
        stub.restore();
    });
	it('should return only array json files', async () => {
        let stub = sinon.stub(fs, "readdir").callsFake((path,utf,cb)=>{
            cb(null, <any>['.','..','user.json','notes.txt','other','comments.json','.DS_store'])
        })
        let files = await ReadJsonFiles.read('api');
        assert.isArray(files);
        expect(files).to.deep.equal(['user.json','comments.json'])
        stub.restore();
    });
	it('should return empty array', async () => {
        let stub = sinon.stub(fs, "readdir").callsFake((path,utf,cb)=>{
            cb(null, <any>['.','..','.DS_store'])
        })
        let files = await ReadJsonFiles.read('api');
        assert.isArray(files);
        expect(files).to.deep.equal([])
        stub.restore();
    });
});