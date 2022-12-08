var request = require('request');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/content/add-ipfs?ignore-dupes=',
   'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   },
   body: JSON.stringify({
      "root": "bafkreifvxooyaffa7gy5mhrb46lnpdom34jvf4r42mubf5efbodyvzeujq",
      "filename": "/testfile",
      "coluuid": "b67cec07-cee9-48ab-b8ce-1118ee0e16db"
   })

};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
