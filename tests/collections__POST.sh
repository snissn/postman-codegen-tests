curl --location --request POST 'http://localhost:3004/collections/' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '{"name":"name","description":"description"}' --fail --no-progress-meter