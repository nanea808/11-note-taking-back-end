const notesRouter = require('express').Router();
const { readFromFile } = require('../helpers/fsUtils');

notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.json('POST request sent to /notes');
});

module.exports = notesRouter;