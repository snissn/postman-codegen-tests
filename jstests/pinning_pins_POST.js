var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/pinning/pins',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   },
   body: JSON.stringify({
      "cid": "<string>",
      "meta": {
         "eiusmod_0": false,
         "elit_0": 2519401.8161127716
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
