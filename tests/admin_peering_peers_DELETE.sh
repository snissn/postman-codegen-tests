curl --location --request DELETE 'http://localhost:3004/admin/peering/peers' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY' \
--data-raw '[
  "<boolean>",
  "<boolean>"
]' --fail --no-progress-meter