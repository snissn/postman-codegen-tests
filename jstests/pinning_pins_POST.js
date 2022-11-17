var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/pinning/pins',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: JSON.stringify({
      "cid": "<string>",
      "meta": {
         "tempor8eb": true,
         "Ut_d": 5118931,
         "sit21": 1175909.507988274
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
