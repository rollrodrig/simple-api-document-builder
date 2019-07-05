import { expect, assert } from 'chai';
import CodeBuilder from './CodeBuilder';
import prettifyJSON from "prettify-json";

describe('CodeBuilder: ', () => {
	it('create', async () => {
        let request = {
            "on": true,
            "id":345354353,
            "phone": {
                name:"roll",
                email:"ss@sgsg.cc",
                id:4543543,
            },
            "data":[1,2,"abc","mnp"],
            "users":[
                {name:"roll",pon:"5656565",id:"uuid23"},
                {name:"roll2",pon:"565",id:"56565ujuj"},
                {name:"bbr2",pon:"866",id:"hrh45"},
            ],
            "password": "768655"
        };
        let htmlcode = CodeBuilder.create(request);
        assert.isString(htmlcode);
    });
});

        // let o = prettifyJSON(obj);
// let aa = {
//     f: {
//         "on": true,
//         "password": "768655"
//     }
// }


// function transform(obj) {
//     let h = "{\n";
//     for (const key in obj) {
//         h +=`\t"${key}":`;
//         if (typeof obj[key] === 'object'){
//             h+= transform(obj[key])+"\n";
//         }else {
//             let v = obj[key];
//             if(typeof v === 'string') {
//                 v = `"${v}"`;
//             }
//             h+= v+",\n";
//         }
//     }
//     h +="}";
//     return h;
// }

// const toString = (code) => {
//     if(Array.isArray(code)){
//       return code.map(item => toString(item));
//     }
//     else if(typeof code == 'object'){
//       let tmp = {};
//       Object.keys(code).forEach(key => {
//         tmp[key] = toString(code[key])
//       });
//       return tmp;
//     }
//     else{
//       return code.toString().split('\n').join('').replace(/ +(?= )/gmi, '');
//     }
// };

// var cfg = {
//     config: {
//       fields: {
//         name: {
//           type: 'text'
//         },
//         age: {
//           type: 'number'
//         }
//       },
//       actions: [
//         {
//           label: 'Print',
//           cb: (model) => {
//             console.log(model);
//           }
//        }
//      ]
//     },
//     data: {name: 'Jhon', age: 23}
//   }

// let hh = toString(cfg)
// console.log(hh);