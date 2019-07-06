class IndexListWrapper {
    static wrap(html:string){
        return `
            <table class="fy-tbl -s">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Description</th>
                    </tr>
                    ${html}
                </tbody>
            </table>
        `;
    }
}
export default IndexListWrapper;