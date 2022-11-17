var request = require('request');
var options = {
   'method': 'GET',
   'url': 'https://api.estuary.tech/content/read/1',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
