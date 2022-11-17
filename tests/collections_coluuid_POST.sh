curl --location --request POST 'http://localhost:3004/collections/22aff2fd-4265-4bd0-9714-ecd159e759a5' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '[
  "<integer>",
  "<integer>"
]' --fail --no-progress-meter