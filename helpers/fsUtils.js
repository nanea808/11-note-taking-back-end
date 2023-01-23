const fs = require('fs');
const util = require('util');

// Promise version of fs.ReadFile
const readFromFile = util.promisify(fs.readFile);

// Accepts content and file and appends content to the given path
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            fs.writeFile(file, JSON.stringify(parsedData), (err) =>
                err ? console.error(err) : console.info(`\nData saved!`));
        }
    });
}

module.exports = { readFromFile, readAndAppend }