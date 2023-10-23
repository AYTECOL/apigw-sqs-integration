const express = require("express");
const api = express.Router();
const { StatusCodes } = require("http-status-codes");

api.post('/echo', async function (request, response) {
    try {
        const bodyParams = request.body;
        console.info('request body on echo: ', JSON.stringify(bodyParams));
        response.status(StatusCodes.OK).json({ data: { msg: 'success'  } });
    } catch (error) {
        process.stderr.write('Error echo route: ', error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: 'internal server error echo route'
        });
    }
});

module.exports = api;