var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.engine('html', exphbs({defaultLayout: 'main', extname: '.html'}));
app.set('view engine', 'html');

// Load routes
require(__dirname + '/routes')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


