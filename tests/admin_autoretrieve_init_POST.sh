curl --location --request POST 'http://localhost:3004/admin/autoretrieve/init' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-urlencode 'addresses=<string>' \
--data-urlencode 'pubKey=<string>' --fail --no-progress-meter