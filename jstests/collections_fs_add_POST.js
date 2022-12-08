var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/collections/fs/add?coluuid=ca505120-e407-4243-b6b0-c226b953af40&content=1&path=/testfile',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
