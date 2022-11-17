set -eu

export APIKEY=$(cat APIKEY)
node index.js

fails=0
success=0
total=0

set +e

for test_script in $(ls tests/*); do
  total=$((total+1))

  bash $test_script > /dev/null
  if [ $? -eq 0 ]; then
    success=$((success+1))
  else
    echo "[$test_script]($test_script)" failed
    echo 
    fails=$((fails+1))
  fi

done


echo "Total Successes" $success
echo "Total Fails" $fails
echo "Total Tests" $total
