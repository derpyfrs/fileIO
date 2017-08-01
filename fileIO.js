var userInput = "." + process.argv.slice(2);
var fs = require("fs");

fs.readFile( userInput, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

