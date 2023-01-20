const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

// const readFromFile = (file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(data);
//             return data;
//         }
//     });
// }

module.exports = { readFromFile }