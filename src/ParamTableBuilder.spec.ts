import { expect, assert } from 'chai';
import ParamTableBuilder from './ParamTableBuilder';
describe('ParamTableBuilder: ', () => {
    it('.create', async () => {
        let params =[
            {
                param:"on",
                example:"true|false",
                description:"true to activate, false to deactivate. Must include previous PIN if deactivating."
            },
            {
                param:"on",
                example:"123",
                description:"true to activate, false to deactivate. Must include previous PIN if deactivating."
            }
        ]
        let html = ParamTableBuilder.create(params);
        assert.isString(html);
    });
});