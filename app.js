
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var api = require('./api');
app.use(express.static('./public'));
app.use(bodyParser.json());
api.initialize(app);
module.exports = app;
