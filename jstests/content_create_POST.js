var axios = require('axios');
var data = JSON.stringify({
  "coluuid": "5c797ac7-0696-4414-9a1f-6ee77e82f69b",
  "dir": "",
  "name": "testname",
  "root": "bafkreifvxooyaffa7gy5mhrb46lnpdom34jvf4r42mubf5efbodyvzeujq"
});

var config = {
  method: 'post',
  url: 'http://localhost:3004/content/create?ignore-dupes=',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer ESTb70ce586-6da3-4854-942d-c7001b1207ceARY'
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
