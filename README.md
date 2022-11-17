in order to use this repo - 

create a file named APIKEY and put your estuary key in it
if you want to run against prod change the HOST variable to the prod api in index.js 

# run run_tests.bash

this will 

1. Generate tests and jstests using your new api key and run against localhost unless you change the HOST variable
2. run each of the curl tests and print out if the test fails and at the end generate summary statistics

if you want to help get this repo so that all tests pass

3. update one of the failed curl tests so that the test passes when you run the curl command
4. update testdata.js and/or index.js so that the curl command thats generate is equivalent to your passing test
5. commit and generate a pr request!
