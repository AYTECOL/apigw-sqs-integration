"use strict";
const { DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const USERS_DB_TABLE = process.env.USERS_DB_TABLE;
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const createUser = async (userParams, messageId) => {
    try {
        const commandPutUser = new PutCommand({
            TableName: USERS_DB_TABLE,
            Item: {
                ...userParams,
                'message_id': messageId
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

module.exports = {
    createUser
}