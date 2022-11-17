var request = require('request');
var options = {
   'method': 'POST',
   'url': 'https://api.estuary.tech/pinning/pins',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: JSON.stringify({
      "cid": "<string>",
      "meta": {
         "suntbb9": false
      },
      "name": "<string>",
      "origins": [
         "<string>",
         "<string>"
      ]
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
