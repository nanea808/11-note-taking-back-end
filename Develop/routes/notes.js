const notesRouter = require('express').Router();

notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.json('GET request sent to /notes');
});

notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.json('POST request sent to /notes');
});

module.exports = notesRouter;