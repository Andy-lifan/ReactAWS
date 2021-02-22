var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-east-2"
});

console.log("Writing entries to Arrivalinfo table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var arrivalInfoData = 
  JSON.parse(fs.readFileSync('../components/data/arrivalinfo.json', 'utf8'));

arrivalInfoData.forEach(function(e) {
  var params = {
    TableName: "Arrivalinfo",
    Item: {
      "action": e.action,
      "remark": e.remark
    }
  };

dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for Arrivalinfo",
                    e.action, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", e.action, "to table.")
  })
});