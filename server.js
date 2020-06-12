const express = require('express');
const app = express();
const { join } = require('path');
const bodyParser = require('body-parser');

app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));

require('./seeders/seed')
  .then(() => app.listen(3000))
  .catch((err) => console.error(err));
