require('dotenv').config();
const express = require('express');
const app = express();
const { join } = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));
app.use(logger('dev'));


require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch((err) => console.error(err));
