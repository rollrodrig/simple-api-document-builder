import { expect, assert } from 'chai';
import ApiBuilder from './ApiBuilder';
describe('ApiBuilder: ', () => {
    it('test create file', async () => {

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