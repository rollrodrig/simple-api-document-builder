import fs from 'fs';
import cheerio from 'cheerio';
class HtmlTemplate {
    static create(template?:string):Promise<any> {
        return new Promise( (resolve, reject)=>{
            let tmp = template || 'src/base/example.html';
            fs.readFile(tmp,'utf8', (err, fd)=>{
                if(err) throw err;
                const $ = cheerio.load(fd);
                resolve($)
            })
        });
    }
}
export default HtmlTemplate;