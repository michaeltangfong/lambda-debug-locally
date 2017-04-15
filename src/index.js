'use strict';

console.log('Loading function...');

var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

exports.handler = (event, context) => {
    var getItemParams = {
        "TableName": "Books",
        "Key": {
            "id": {
                "S": event.id.S
            },
            "type": {
                "S": event.type.S
            }
        },
        "ConsistentRead": false,
        "ProjectionExpression": "title",
        "ReturnConsumedCapacity": "TOTAL"
    };

    dynamodb.getItem(getItemParams, function(err, data) {
        if (err) {
            // console.log("Error: " + err.stack); // an error occurred
            context.fail("Error: " + err.stack);
        } else {
            // console.log("data: ", JSON.stringify(data));
            context.succeed(JSON.stringify(data));
        }
    });
}