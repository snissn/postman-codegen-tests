curl --location --request POST 'http://localhost:3004/content/create?ignore-dupes=' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY' \
--data-raw '{
  "coluuid": "<string>",
  "dir": "<string>",
  "location": "<string>",
  "name": "<string>",
  "root": "<string>",
  "type": "<integer>"
}' --fail --no-progress-meter