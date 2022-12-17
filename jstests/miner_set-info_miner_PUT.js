var axios = require('axios');
var data = JSON.stringify({
  "name": "testname"
});

var config = {
  method: 'put',
  url: 'http://localhost:3004/miner/set-info/f02620',
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