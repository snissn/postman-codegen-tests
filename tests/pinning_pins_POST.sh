curl --location --request POST 'https://api.estuary.tech/pinning/pins' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '{
  "cid": "<string>",
  "meta": {
    "suntbb9": false
  },
  "name": "<string>",
  "origins": [
    "<string>",
    "<string>"
  ]
}' --fail --no-progress-meter