var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/content/add-car?ignore-dupes=&filename=@testfile',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
