var request = require('request');
var options = {
   'method': 'POST',
   'url': 'https://api.estuary.tech/pinning/pins/:pinid',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: '<string>'

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
