const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./api');

const dbUrl = 'mongodb://127.0.0.1:27017/mydb';

module.exports = (cb) => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
  }).then(() => {
    console.log('mongoDB Connected');
  }).catch( (err) => {
    console.log(err);
  })
  const app = express();
  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.raw());
  app.use(morgan('[:date[iso]] :method :url :status :response-time ms - :res[content-length]'));
  app.use('/api', api);
  app.use('*', (req, res) => res.status(404).end());
  const server = app.listen(process.env.PORT || 9428, () => cb && cb(server));
};
