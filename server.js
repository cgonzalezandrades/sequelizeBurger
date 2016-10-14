var express = require('express');




var app = express();

var override = require('method-override');

app.use(express.static(process.cwd() + '/public'));
//Override
app.use(override('_method'));

//handelbars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//BodyParser
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));


var applicationController = require('./controllers/application_controller');


app.use('/',applicationController);

var burgers1 = require("./models")["burgers1"];
/*{force:true} Drops the table and re-adds it. It deletes all the data*/
burgers1.sync()

.then(function () {

});






var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log('IM LISTENING IS PORT ' + PORT);

})