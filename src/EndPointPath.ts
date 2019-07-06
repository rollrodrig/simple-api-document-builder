class EndPointPath {
    static create(method, path) {
        return `<span class="epm">${method}</span>&nbsp;&nbsp;<span class="ep">${path}</span>`;
    }
}
export default EndPointPath;