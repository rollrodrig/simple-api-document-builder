"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParamTableBuilder {
    static create(params) {
        let htmlOpen = `
            <table class="fy-tbl -s">
                <tbody>
                    <tr>
                    <th>Paramenters</th>
                    <th>Example</th>
                    <th>Description</th>
                    </tr>
            `;
        let htmlClose = `
                </tbody>
            </table>        
            `;
        let html = htmlOpen;
        params.map((p) => {
            html += `
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
exports.default = ParamTableBuilder;
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
