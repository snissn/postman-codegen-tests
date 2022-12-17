var request = require('request');
var options = {
   'method': 'DELETE',
   'url': 'http://localhost:3004/collections/585595b7-5cc1-4b47-ac79-71e2910733b3',
   'headers': {
      'Accept': '*/*',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
