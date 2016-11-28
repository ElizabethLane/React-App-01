var express = require('express');
//**Require is NODE's keyword**
//--Require takes as it's one and only keyword,
//  the string name of the module.
//  Express is in the JSON object (key)
//Now we have access to the entire
//express API
//Create our app

var app = express();
//Call the express library as a function

app.use(express.static('public'));
//Express a folder name to the web server
// in this case 'public'
//Let's you add functionality to your
//express application


app.listen(3000, function(){
  console.log('Express server is up on PORT 3000');
});
