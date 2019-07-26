import { expect, assert } from 'chai';
import CreatePublic from './CreatePublic';

describe('CreatePublic: ', () => {
	it('create', async () => {
        // await CreatePublic.create();
        // console.log("docs/ creates");
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