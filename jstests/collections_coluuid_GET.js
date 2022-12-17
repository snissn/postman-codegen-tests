var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:3004/collections/adb7a5d5-10ca-4828-94e3-20617f658d43?dir=',
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
