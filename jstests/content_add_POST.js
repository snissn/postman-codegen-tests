var request = require('request');
var fs = require('fs');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/content/add?coluuid&replication=&ignore-dupes=&lazy-provide=&dir=',
   'headers': {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY'
   },
   formData: {
      'data': {
         'value': fs.createReadStream('/path/to/file'),
         'options': {
            'filename': 'file',
            'contentType': null
         }
      },
      'filename': '<string>'
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});
