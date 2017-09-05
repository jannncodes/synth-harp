//External Modules
const express = require('express');
const {resolve} = require('path');
// const bodyParser = require('body-parser');

//App
const app = express();

//Bodyparserc, Static File Setup, API as router, use index.html as default
module.exports = app
  // .use(bodyParser.urlencoded({ extended: true }))
  // .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public')))
  // .use('/')
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));


//404
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Error-Handling
app.use(function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

//Server
const server = app.listen(1337, () => {
  console.log('Listening on port 1337');
});
