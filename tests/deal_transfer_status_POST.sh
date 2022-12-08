curl --location --request POST 'http://localhost:3004/deal/transfer/status' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY' \
--data-raw '{
  "id": "<integer>",
  "initiator": "<string>",
  "responder": "<string>"
}' --fail --no-progress-meter