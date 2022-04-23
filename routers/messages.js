const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("GET message");
});

router.post('/', (req, res) => {
    res.send("POST message");
});

module.exports = router;