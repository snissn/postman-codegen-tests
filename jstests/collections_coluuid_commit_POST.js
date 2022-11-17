var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/collections/22aff2fd-4265-4bd0-9714-ecd159e759a5/commit',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
