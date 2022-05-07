//putuserdata from vistor_table

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

    let responseBody = "";
    let statusCode = "";

    const { stat, fname, lname } = JSON.parse(event.body);

    const params = {
        TableName: 'visitor_count',
        Item: {
            "stat" : stat,
            "fname" : fname,
            "lname" : lname
     }
    }
    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = 'Unable to input user data';
        statusCode = 404;
    }
    const response = {
        statusCode: statusCode,
        headers: {"myHeader": "test"},
        body: responseBody
    }

    return response;
}
// Create the DynamoDB service object


// Call DynamoDB to read the item from the table

