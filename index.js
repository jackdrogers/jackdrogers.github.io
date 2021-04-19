const express = require('express'),
      app = express(),
      path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'));

app.use(function(req, res, next) {
    res.status(404).send('Cannot be found!');
});

app.listen(8080, () => {
    console.log('Running!');
});