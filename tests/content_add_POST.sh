curl --location --request POST 'http://localhost:3004/content/add?coluuid&replication=&ignore-dupes=&lazy-provide=&dir=' \
--header 'Content-Type: multipart/form-data' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer EST0c8b9abc-b1ca-41c3-ae0b-b91ca0b3fa1dARY' \
--form 'data=@"/path/to/file"' \
--form 'filename="<string>"' --fail --no-progress-meter