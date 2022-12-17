var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'addresses': '/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWLg5h6dARgiBcY6yTTMw8ivPzJufjEBDXahJNKWRGMWNg',
  'pubKey': 'CAESIKFRR4yzxwk1aKotoPiUtR8OeQ/yydF18J9h5Y8gLAFN' 
});
var config = {
  method: 'post',
  url: 'http://localhost:3004/admin/autoretrieve/init',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
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
