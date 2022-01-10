//! Endpoints: /api

const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const fs = require('fs');
const path = require('path');


router.post('/', async (req, res) => {
    var opts = req.body;

    var possible_options = {
        url: "string",
        method: "GET/POST/PATCH/PUT/DELETE",
        headers: "JSON OBJECT",
        query: "JSON OBJECT",
        body: "JSON OBJECT"
    };

    if (!req.body) return res.status(400).send(possible_options);
    if (req.body.url === undefined) return res.status(400).send("URL is needed");

    const { body, headers, query } = req.body;
    
    let options = {
        method: opts.method,
        url: opts.url,
        // params: rquery,
        // data: rbody,
        headers: {
          "hosturl": 'rest.hxnrycz.xyz'
        }
    };

    if (body) options.data = JSON.parse(body);
    if (query) options.params = JSON.parse(query);
    if (headers) options.headers.push = JSON.parse(headers);


    axios.request(options).then(function (response) {

            var data = {
                requestUrl: response.config.url,
                requestQuery: response.config.params,
                fullUrl: response.request.res.responseUrl,
                requestMethod: opts.method,
                statusCode: response.status,
                statusMessage: response.statusText,
                requestHeaders: response.config.headers,
                requestBody: response.config.data,
                responseHeaders: response.headers,
                responseBody: response.data
            };

            res.send(data);

    }).catch(function (error) {
        console.error(error);
        res.status(500).sendStatus(500);
    });

});

router.get('*', async (req, res) => res.status(200).sendStatus(200));


module.exports = router;