var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('data', fs.createReadStream('foo'));
data.append('filename', '/testfile');

var config = {
  method: 'post',
  url: 'http://localhost:3004/content/add?coluuid&replication=&ignore-dupes=&lazy-provide=&dir=',
  headers: { 
    'Content-Type': 'multipart/form-data', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer ESTb70ce586-6da3-4854-942d-c7001b1207ceARY', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  throw(error);
});
