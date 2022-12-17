var request = require('request');
var options = {
   'method': 'GET',
   'url': 'http://localhost:3004/public/miners',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
