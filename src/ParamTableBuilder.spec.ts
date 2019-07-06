import { expect, assert } from 'chai';
import ParamTableBuilder from './ParamTableBuilder';
describe('ParamTableBuilder: ', () => {
    it('.create', async () => {
        let params =[
            ["authorization","auth123token","Nulla nunc lorem, auctor non"],
            ["userid","uuid123","Integer nec scelerisque lorem. Nulla nunc lorem, auctor non"],
            ["qty","2","Maecenas fermentum turpis laoreet sem maximus venenatis. S"]
        ]
        let html = ParamTableBuilder.create(params);
        console.log(html);
        assert.isString(html);
    });
});