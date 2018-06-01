'use strick';

const express = require('express');
const config = require('./config/config');
const app = new express();
const bodyParser = require('body-parser');

// register JSON parser middleware
app.use(bodyParser.json());

require('./routes/personRoutes')(app);
require('./routes/versionRoutes')(app, config);

app.listen(3000, () => {
  /* eslint-disable */
  console.log('Server up!');
});
