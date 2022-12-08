var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/content/importdeal',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   },
   body: JSON.stringify({
      "coluuid": "f0094785-5e53-4d90-a293-95d537db43d2",
      "name": "testname",
      "dealIDs": []
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
