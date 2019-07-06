import HtmlTemplate from './HtmlTemplate';
class CreateIndex {
    static async create(){
        let index = await HtmlTemplate.create('base/index.html');
        return index;
    }
}
export default CreateIndex;