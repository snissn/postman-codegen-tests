var request = require('request');
var options = {
   'method': 'GET',
   'url': 'http://localhost:3004/content/failures/1',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
