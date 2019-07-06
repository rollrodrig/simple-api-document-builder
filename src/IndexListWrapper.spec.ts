import { expect, assert } from 'chai';
import IndexListWrapper from './IndexListWrapper';
describe('IndexListWrapper: ', () => {
    it('.add', async () => {
        let table = IndexListWrapper.wrap("<tr><td>HOLA</td></tr>");
        console.log(table);
    });
});