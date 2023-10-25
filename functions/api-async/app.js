"use strict";
const { createPurchase } = require('./utils');
const handler = async (event, context) => {
  try {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    // check event records
    const eventRecord = event["Records"][0];
    const messageId = eventRecord["messageId"];
    const messageBody = JSON.parse(eventRecord["body"])
    const purchaseData = messageBody["data"];
    console.info('message_id: ', messageId);
    console.info('message_body: ', messageBody);
    const dynamodbResponse = await createPurchase(purchaseData, messageId)
    console.info('DynamoDbResponse: ', dynamodbResponse);
  } catch (error) {
    // manage the message as you preffer
    process.stderr.write('Error echo processign request: ', error);
    throw error;
  }
};

module.exports.handler = handler;