curl --location --request DELETE 'https://api.estuary.tech/admin/peering/peers' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '[
  "<boolean>",
  "<boolean>"
]' --fail --no-progress-meter