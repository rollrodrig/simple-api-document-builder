import { expect, assert } from 'chai';
import fs from 'fs-promise';
import ApiBuilder from './ApiBuilder';
import cheerio from 'cheerio';
import ReadJsonFiles from './ReadJsonFiles';
import ReadJsonContent, { TJsonContent } from './ReadJsonContent';
import HtmlTemplate from './HtmlTemplate';
import NavBarBuilder from './NavBarBuilder';
import CreateHtml from './CreateHtml';
import ParamTableBuilder from './ParamTableBuilder';
import CodeBuilder from './CodeBuilder';
import EndPointPath from './EndPointPath';
import RemoveFiles from './RemoveFiles';
import CreatePublic from './CreatePublic';
describe('ApiBuilder: ', () => {
    it('test create file', async () => {
        let files = await ReadJsonFiles.read('api');
        let navbar = await NavBarBuilder.create(files);
        // await RemoveFiles.remove();
        // await CreatePublic.create();
        // for (let i = 0; i < files.length; i++) {
        //     let currentFile = files[i];
        //     let fileinfo = NavBarBuilder.cleanName(currentFile);
        //     let filecontent: TJsonContent = await ReadJsonContent.read(`api/${currentFile}`);
            
        //     let $ = await HtmlTemplate.create();
        //     $('#sbmen').html(navbar);

        //     $('#eptitle').html(filecontent.title);
        //     $('#epdesc').html(`<p>${filecontent.description}</p>`);

        //     let endpoint = EndPointPath.create(filecontent.method, filecontent.path);
        //     $('#eppath').html(endpoint);
        //     $('#eppathinfo').html(filecontent.path_info);

        //     let paramsTable = ParamTableBuilder.create(filecontent.parameters);
        //     $('#epparams').html(paramsTable);

        //     let header = CodeBuilder.create(filecontent.header);
        //     $('#ephed').html(header);

        //     let body = CodeBuilder.create(filecontent.body);
        //     $('#epbdy').html(body);
            
        //     let response = CodeBuilder.create(filecontent.response);
        //     $('#epres').html(response);
            
        //     await CreateHtml.create(`public/${fileinfo.href}`, $.html());
        // }

    });
});


// let file = files[0];
        // console.log(file);
        // let obj = await ReadJsonContent.read(file);
        // let rawdata = fs.readFile('api/user.json');
        // //@ts-ignore  
        // let student = JSON.parse(rawdata);

        // let files = await fs.readdir('api')
        // console.log(files);
        // let files = fs.readdir('api',(err, files) => {
        //     if (err) throw err;
        //     new Promise((resolve, rejec)=>{
        //         resolve(files);
        //     })
        // })
        // console.log(files);
        // let rawdata = fs.readFileSync('api/user.json');
        // //@ts-ignore  
        // let student = JSON.parse(rawdata);
        // console.log(student);  
        // fs.readFile('public/_template.html','utf8', (err, data) => {
        //     if (err) throw err;
        //     const $ = cheerio.load(data)
        //     $('#api_title').text('Hello there');
        //     fs.writeFile('public/example.html', $.html(), 'utf8', (err)=>{
        //         if (err) throw err;
        //     });
        // });

// let ab = new ApiBuilder();
// fs.writeFile("../public/hi.html", "Hey there!", function(err) {
//     if(err) { return console.log(err); }
//     console.log("The file was saved!");
// }); 

// var stream = fs.createWriteStream("my_file.txt");
// stream.once('open', function(fd) {
//   stream.write("My second row\n");
//   stream.write("My second row\n");
//   stream.write("My second row\n");
//   stream.end();
// });     
// fs.appendFile('message.txt', 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });        
// fs.mkdir('public/AAA', { recursive: true }, (err) => {
//     if (err) throw err;
// });