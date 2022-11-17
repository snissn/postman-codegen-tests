curl --location --request POST 'http://localhost:3004/pinning/pins' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST-xxx-ARY' \
--data-raw '{
  "cid": "<string>",
  "meta": {
    "tempor8eb": true,
    "Ut_d": 5118931,
    "sit21": 1175909.507988274
  },
  "name": "<string>",
  "origins": [
    "<string>",
    "<string>"
  ]
}' --fail --no-progress-meter