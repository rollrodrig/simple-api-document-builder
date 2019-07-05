import cheerio from 'cheerio';

// <table class="fy-tbl -s">
// <tbody><tr>
//     <th>Paramenters</th>
//     <th>Example</th>
//     <th>Description</th>
// </tr>
// <tr>
//     <td>on</td>
//     <td>true</td>
//     <td>true to activate, false to deactivate. Must include previous PIN if deactivating.</td>
// </tr>
// <tr>
//     <td>password</td>
//     <td>1234</td>
//     <td>A PIN to deactivate Valet Mode. Can be blank if activating with a previous PIN.</td>
// </tr>
// </tbody>
// </table>
interface TParam {
    param:string, 
    example:string, 
    description:string
}
class ParamTableBuilder {
    static create(params:TParam[]){
        let htmlOpen:string = `
            <table class="fy-tbl -s">
                <tbody>
                    <tr>
                    <th>Paramenters</th>
                    <th>Example</th>
                    <th>Description</th>
                    </tr>
            `;
        let htmlClose:string = `
                </tbody>
            </table>        
            `;
        let html:string = htmlOpen;
        params.map((p:TParam)=>{
                    html +=`
                        <tr>
                            <td>${p.param}</td>
                            <td>${p.example}</td>
                            <td>${p.description}</td>
                        </tr>
                    `;
        });
        html += htmlClose;
        return html;
    }
}
export default ParamTableBuilder;
// "parameters":[
//     {
//         "param":"on",
//         "example":"true|false",
//         "description":"true to activate, false to deactivate. Must include previous PIN if deactivating."
//     },

//     {
//         "param":"on",
//         "example":"123",
//         "description":"true to activate, false to deactivate. Must include previous PIN if deactivating."
//     }
// ],