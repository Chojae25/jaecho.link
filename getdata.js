//getuserdata from vistor_table

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

    let responseBody = "";
    let statusCode = "";

    const { id } = event.pathParameters;

    const params = {
    TableName: 'visitor_count',
    Key: {
        "stat": id
     }
    }
    try {
        const data = await documentClient.get(params).promise();
        responseBody = JSON.stringify(data.Item);
        statusCode = 200;
    } catch (err) {
        responseBody = 'Unable to get first last name';
        statusCode = 403;
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

