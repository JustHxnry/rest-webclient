const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const port = config.port;
const url = config.url;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

//routes
app.use('/api', require('./src/routes/api'));
app.use('/ui', require('./src/routes/ui'));
app.use('/', require('./src/routes/ui'));

app.listen(port, () => console.log(`Web Started : ${port} - ${url}`));