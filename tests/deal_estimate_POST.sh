curl --location --request POST 'http://localhost:3004/deal/estimate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '{"size":100,"replication":1,"durationBlks":100,"verified":true}' --fail --no-progress-meter