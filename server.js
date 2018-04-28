var PORT = process.env.PORT || 3000;
var db = require("./app/models");
require('dotenv').config();



 app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
 });


//  Vimeo = require('vimeo').Vimeo;
//  var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN