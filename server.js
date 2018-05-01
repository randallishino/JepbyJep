var PORT = process.env.PORT || 3000;
var db = require("./app/models");
require('dotenv').config();



 app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
 });