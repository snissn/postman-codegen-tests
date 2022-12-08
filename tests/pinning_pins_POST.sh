curl --location --request POST 'http://localhost:3004/pinning/pins' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY' \
--data-raw '{
  "cid": "<string>",
  "meta": {
    "eiusmod_0": false,
    "elit_0": 2519401.8161127716
  },
  "name": "<string>",
  "origins": [
    "<string>",
    "<string>"
  ]
}' --fail --no-progress-meter