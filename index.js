var path = require('path');
const swagger_data = require("./swagger.json")

var testdata = require("./testdata").data
var testdata_module = require("./testdata")

const HOST = "http://localhost:3004"


if(!process.env.APIKEY){
  throw "API KEY in environment variable APIKEY required"
}
const APIKEY = `Bearer ${process.env.APIKEY}`

var langs = [ {language: "curl", variant: "curl", "folder" : "tests" , extension: ".sh"} , {language: "nodejs", variant: "Request", folder: "jstests", extension: ".js"}]

var codegen = require('postman-code-generators'),
  sdk = require('postman-collection'),
  language = 'curl'
  variant = 'curl'
  options = {
    indentCount: 3,
    indentType: 'Space',
    trimRequestBody: true,
    followRedirect: true
  };

  var fs = require('fs'),

Converter = require('openapi-to-postmanv2'),
//openapiData = fs.readFileSync('openapi.json', {encoding: 'UTF8'});
openapiData = fs.readFileSync('swagger.json', {encoding: 'UTF8'});
//swagger.json


function write_file(filename, data){
  fs.writeFileSync(filename, data);
}

function write_file_curl(filename, data){
  data  = data + ` --fail --no-progress-meter`
  fs.writeFileSync(filename, data);
}

function update_request(request, auth){
  request.url.host = [HOST]
  request.url.auth = auth

  return request
}

function process_request(item, auth){
  var request = item.request

  var name = request.url.path.join("_").replace(":","") + "_" + request.method

  request = add_auth_to_header(request, auth)
  request = add_data_to_request(request, item)
  request = new sdk.Request(request)
  request = update_request(request, auth)
  for( var lang_index in langs){
    var lang = langs[lang_index]
    var language = lang.language
    var variant = lang.variant
    var folder = lang.folder
    var extension = lang.extension
    codegen.convert(language, variant, request, options, function(error, snippet){
      process_snippet(error, snippet, name, folder, extension, language)
    })
  }
}

function process_snippet(error, snippet, name, folder, extension, language){
  if (error) {
    console.log("error",error)
  }
  if(language == "curl"){
    write_file_curl(folder + "/"  + name + extension, snippet)
  }else{
    write_file(folder + "/"  + name + extension, snippet)
  }
}

function add_auth_to_header(request, auth){
  if(auth && auth.apikey){
    request.header.push({key: "Authorization", value: APIKEY})
  }
  return request;
}


function get_value(key){
  if(key == "id"){
    console.log(key)
  }
  if(key == "coluuid"){
    return testdata[key].pop()
  }
  return testdata[key]
}


function process_variable(request){
  for(index in request.url.variable){
    var variable = request.url.variable[index]
    variable['value'] = get_value(variable['key'])
  }
  return request
}

function process_path(request){
  for(index in request.url.path){
    var query = request.url.path[index]
    if(query[0] == ":"){
      request.url.path[index] = get_value( query.substr(1,query.length-1))
    }
  }
  return request
}

function process_query(request){
  for(index in request.url.query){
    var query = request.url.query[index]
    query['value'] = get_value(query['key'])
  }

  //for format where url has something like /content/add/:filename
  for(index in request.url.query){
    var query = request.url.query[index]
    if(query[0] == ":"){
      query['value'] = get_value( query.substr(1,query.length-1))
    }
  }
  return request
}



function read_swagger(request){
    var paths = []
    for(var index in request['url']['path']){
        const item = request.url.path[index]
        if(item[0] == ":"){
            paths.push("{" + item.substr(1,item.length-1) + "}")
        }else{
            paths.push(item)
        }
    }
    path = "/" + paths.join("/")
    method = request.method.toLowerCase()
    return swagger_data['paths'][path][method]
}


function debug(data){
    console.log(JSON.stringify(data, null, 2))
}

function process_body(request, item){
  /*  "body": {
    "mode": "raw",
    "raw": "{\n  \"coluuid\": \"<string>\",\n  \"dir\": \"<string>\",\n  \"filename\": \"<string>\",\n  \"peers\": [\n    \"<string>\",\n    \"<string>\"\n  ],\n  \"root\": \"<string>\"\n}",
    "options": {
      "raw": {
        "language": "json"
      }
    }
  }*/

  if(request && request.body && request.body.mode && request.body.mode == "raw"){
    var swag = read_swagger(request)
    for( var param_index in swag.parameters ){
      var param = swag.parameters[param_index]
      if(param.name == "body"){
        var key = param.schema['$ref']
        var data =  get_value(key)
        request.body.raw = JSON.stringify(data)
      }else{
        //console.log(request)

      }
    }
  }
  return request
}

function add_data_to_request(request, item){
  request = process_query(request)
  request = process_variable(request)
  request = process_body(request, item)
  request = process_path(request)
  return request

}

function process_collections(collections, auth){
  if(collections.item ){
      for (let i = 0; i < collections.item.length; i++) {
        var item = collections.item[i]
        if(item.request){
          process_request(item, auth)
        }else{
          process_collections(item, auth)
        }
      }
  }
}



async function main(){
  await testdata_module.init()
  Converter.convert({ type: 'string', data: openapiData },
    {}, (err, conversionResult) => {
      if (!conversionResult.result) {
        console.log('Could not convert', conversionResult.reason);
      }
      else {
        var auth = conversionResult.output[0].data.auth
        var collections = conversionResult.output[0].data

        process_collections(collections, auth)

      }
    }
  );
}


main()
