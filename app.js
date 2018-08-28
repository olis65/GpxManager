'use strict';

const express = require('express');

var app = express();

var apiRouter = require("./api/api.js");

app.use('/api', apiRouter);

app.get("/", function (req, res) {
    res.send("Default Route ...")
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Express app listening on port ${port}")
});
