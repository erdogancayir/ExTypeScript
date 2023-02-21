"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var port = 8080;
app.get("/", function (req, res) {
    res.json({ msg: "Hello get jobs" });
});
app.post("/", function (req, res) {
    res.json({ msg: "Hello post jobs" });
});
app.put("/put/:id", function (req, res) {
    res.json({ msg: "Hello put jobs" });
});
app["delete"]("/put/:id", function (req, res) {
    res.json({ msg: "Hello delete jobs" });
});
app.listen(port, function () {
    console.log("Server is running at port http://localhost:8080");
});
