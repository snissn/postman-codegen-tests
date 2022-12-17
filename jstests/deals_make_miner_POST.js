var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/deals/make/f02620',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   },
   body: '<string>'

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
