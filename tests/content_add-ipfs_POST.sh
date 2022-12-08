curl --location --request POST 'http://localhost:3004/content/add-ipfs?ignore-dupes=' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY' \
--data-raw '{"root":"bafkreifvxooyaffa7gy5mhrb46lnpdom34jvf4r42mubf5efbodyvzeujq","filename":"/testfile","coluuid":"b67cec07-cee9-48ab-b8ce-1118ee0e16db"}' --fail --no-progress-meter