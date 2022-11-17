var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/deal/transfer/status',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: JSON.stringify({
      "id": "<integer>",
      "initiator": "<string>",
      "responder": "<string>"
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
