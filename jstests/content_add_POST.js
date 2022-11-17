var request = require('request');
var fs = require('fs');
var options = {
   'method': 'POST',
   'url': 'http://localhost:3004/content/add?coluuid=22aff2fd-4265-4bd0-9714-ecd159e759a5&replication=&ignore-dupes=&lazy-provide=&dir=',
   'headers': {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      'Authorization': 'Bearer EST-xxx-ARY'
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
