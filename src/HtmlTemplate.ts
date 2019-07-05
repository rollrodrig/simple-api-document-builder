import fs from 'fs';
import cheerio from 'cheerio';
class HtmlTemplate {
    static create(template?:string):Promise<any> {
        return new Promise( (resolve, reject)=>{
            let tmp = template || 'public/__example.html';
            fs.readFile(tmp,'utf8', (err, fd)=>{
                if(err) throw err;
                const $ = cheerio.load(fd);
                resolve($)
            })
        });
    }
}
export default HtmlTemplate;




        // fs.readFile('public/__example.html','utf8', (err, data) => {
        //     if (err) throw err;
        //     const $ = cheerio.load(data)
        //     $('#api_title').text('Hello there');
        //     fs.writeFile('public/example.html', $.html(), 'utf8', (err)=>{
        //         if (err) throw err;
        //     });
        // });