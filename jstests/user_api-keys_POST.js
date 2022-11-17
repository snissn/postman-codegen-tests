var request = require('request');
var options = {
   'method': 'POST',
   'url': 'https://api.estuary.tech/user/api-keys?expiry=&perms=',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
