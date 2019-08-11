var express = require("express");
var cors = require('cors')
var app = express()

var data = require('./assets/models');

app.use(cors())

app.get("/url", (req, res, next) => {
    res.json(data);
});

app.listen(3004, () => {
    console.log("Server running on port 3002");
});
