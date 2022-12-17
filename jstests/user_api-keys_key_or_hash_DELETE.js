var request = require('request');
var options = {
   'method': 'DELETE',
   'url': 'http://localhost:3004/user/api-keys/ESTf4309dc9-53aa-4a78-a9aa-f3d5bf6916adARY',
   'headers': {
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
