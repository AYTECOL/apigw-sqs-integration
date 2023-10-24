const express = require("express");
const api = express.Router();
const { StatusCodes } = require("http-status-codes");
const { createUser } = require('./utils')

api.post('/create', async function (request, response) {
    try {
        const bodyParams = request.body;
        console.info('request body on echo: ', JSON.stringify(bodyParams));
        const userData = bodyParams.data;
        await createUser(userData);
        response.status(StatusCodes.OK).json({ data: {...userData}});
    } catch (error) {
        process.stderr.write('Error echo route: ', error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: 'internal server error user create'
        });
    }
});

module.exports = api;