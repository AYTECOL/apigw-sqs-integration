"use strict";
const { DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const PURCHASES_DB_TABLE = process.env.PURCHASES_DB_TABLE;
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const createPurchase = async (purchaseParams, messageId) => {
    try {
        const commandPutPurchase = new PutCommand({
            TableName: PURCHASES_DB_TABLE,
            Item: {
                ...purchaseParams,
                'message_id': messageId,
                'status': 'success'
            }
        });
        const response = await docClient.send(commandPutPurchase);
        console.info(response.Attributes);
        return response;
    } catch (error) {
        process.stderr.write("Error createPurchase: ", error);
        throw error;
    }
};

module.exports = {
    createPurchase
}