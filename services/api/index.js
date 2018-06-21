const express 	= require('express');
const app 	= express();
//config 	= require('./lib/config');

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/v1/lists', (req, res) => res.send('Hello Lists!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
