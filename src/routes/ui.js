const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('./../../config');

router.get('/', async (req, res) => {

    const { body, url, headers, query } = req.query;

    res.render('index', { body, url, headers, query });

});

module.exports = router;