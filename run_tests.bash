set -eu

export APIKEY=$(cat APIKEY)

#curl https://raw.githubusercontent.com/application-research/estuary/dev/docs/swagger.json -o swagger.json

rm -f tests/*

node index.js

fails=0
success=0
total=0

set +e

for test_script in $( ls tests/*|grep -v DELETE|grep -v miner| grep -v deal ; ls tests/*|grep DELETE;); do
  total=$((total+1))

  bash $test_script > /dev/null
  if [ $? -eq 0 ]; then
    success=$((success+1))
  else
    echo "[$test_script]($test_script)" failed
    echo 
    fails=$((fails+1))
  fi
  sleep 1

done


echo "Total Successes" $success
echo "Total Fails" $fails
echo "Total Tests" $total
