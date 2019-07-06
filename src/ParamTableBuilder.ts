import cheerio from 'cheerio';
export interface TParam {
    param:string, 
    example:string, 
    description:string
}
class ParamTableBuilder {
    static create(params:string[][]){
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
        params.map((p:string[])=>{
                    html +=`
                        <tr>
                            <td><code>${p[0]}</code></td>
                            <td><code>${p[1]}</code></td>
                            <td>${p[2]}</td>
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