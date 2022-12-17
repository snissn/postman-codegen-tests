var axios = require('axios');

var config = {
  method: 'post',
  url: 'http://localhost:3004/user/api-keys?expiry=24h&perms=',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer ESTb70ce586-6da3-4854-942d-c7001b1207ceARY'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  throw(error);
});
