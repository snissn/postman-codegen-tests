var request = require('request');
var options = {
   'method': 'DELETE',
   'url': 'http://localhost:3004/admin/peering/peers',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
   },
   body: JSON.stringify([
      "<boolean>",
      "<boolean>"
   ])

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
