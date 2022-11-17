var request = require('request');
var options = {
   'method': 'GET',
   'url': 'http://localhost:3004/deal/proposal/:propcid',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
