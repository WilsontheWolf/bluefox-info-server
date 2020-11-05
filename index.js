const port = process.env.BLUEFOX_PORT;

if (!port) {
    console.error('No Port Found. Exiting...');
    process.exit(0);
}

const express = require('express');
const app = express();
app.use(express.json({ type: '*/*'}));

let data = [];

app.get('/', (req, res) => {
    res.send(JSON.stringify(data));
});

app.post('/', (req, res) => {
    let body = req.body;
    if (typeof body === 'string') body = [body];
    if (!Array.isArray(body)) return res.status(400).send(JSON.stringify({
        error: true,
        message: 'Error: Bad Request. Request must be an array or string.'
    }));
    data = body.slice(0, 4);
    res.send(JSON.stringify({
        error: false,
        message: 'Successfully set new value!'
    }));
});

// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    // console.error('An error ocurred!');
    // console.error(err.stack);
    res.status(500).send(JSON.stringify({
        error: true,
        message: `Internal Server Error! ${err.message}`
    }));
});


app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

