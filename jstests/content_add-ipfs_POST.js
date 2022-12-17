var axios = require('axios');
var data = JSON.stringify({
  "cid": "bafkreifvxooyaffa7gy5mhrb46lnpdom34jvf4r42mubf5efbodyvzeujq",
  "meta": {},
  "name": "testname",
  "origins": [
    "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWLg5h6dARgiBcY6yTTMw8ivPzJufjEBDXahJNKWRGMWNg"
  ]
});

var config = {
  method: 'post',
  url: 'http://localhost:3004/content/add-ipfs?ignore-dupes=',
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
