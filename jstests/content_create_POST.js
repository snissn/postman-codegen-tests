var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/content/create?ignore-dupes=',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   },
   body: JSON.stringify({
      "coluuid": "<string>",
      "dir": "<string>",
      "location": "<string>",
      "name": "<string>",
      "root": "<string>",
      "type": "<integer>"
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
