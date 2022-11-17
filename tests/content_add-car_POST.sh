curl --location --request POST 'http://localhost:3004/content/add-car?ignore-dupes=&filename=@testfile' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '' --fail --no-progress-meter