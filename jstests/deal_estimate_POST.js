var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/deal/estimate',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: JSON.stringify({
      "size": 100,
      "replication": 1,
      "durationBlks": 100,
      "verified": true
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
