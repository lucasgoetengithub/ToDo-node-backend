const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
    res.send('TUDO CERTO COM A API');
})

server.listen(3000, () => {
    console.log('API online');
})