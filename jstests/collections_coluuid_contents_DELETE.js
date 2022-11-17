var request = require('request');
var options = {
   'method': 'DELETE',
   'url': 'http://localhost:3004/collections/22aff2fd-4265-4bd0-9714-ecd159e759a5/contents',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: JSON.stringify({
      "By": "content_id",
      "Value": "1"
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
