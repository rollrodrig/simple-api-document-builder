import prettifyJSON from "prettify-json";
class CodeBuilder {
    static create(code:any){
        let html:string = `
        <pre><code class="json">
${prettifyJSON(code)}
        </code></pre>`;
        return html;
    }
}
export default CodeBuilder;
