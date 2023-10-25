'use strict'
const { DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const { PutCommand, QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const USERS_DB_TABLE = process.env.USERS_DB_TABLE;
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const createUser = async (userParams) => {
    try {
        const commandPutUser = new PutCommand({
            TableName: USERS_DB_TABLE,
            Item: {
                ...userParams
            }
        });
        const response = await docClient.send(commandPutUser);
        console.info(response.Attributes);
        return response;
    } catch (error) {
        process.stderr.write("Error createUser: ", error);
        throw error;
    }
};

const fetchUserByMessageId = async (messageId) => {
    try {
        const queryCommand =  new QueryCommand({
            TableName: USERS_DB_TABLE,
            KeyConditionExpression: "#message_id = :message_id",
            ExpressionAttributeNames: {
                "#message_id": "message_id"
            },
            ExpressionAttributeValues: {
                ":message_id": messageId
            },
            ScanIndexForward: false,
            IndexName: 'message_index'
        });
        const response = await docClient.send(queryCommand);
        console.info(response.Attributes);
        return response;
    } catch (error) {
        process.stderr.write("Error fetchUserByMessageId: ", error);
        throw error;
    }
}

module.exports = {
    createUser,
    fetchUserByMessageId
}