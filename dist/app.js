"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body_parser_1 = require("body-parser");
require("reflect-metadata");
process.env.NODE_ENV = "SCM";
var app = express();
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({
    extended: true
}));
var parsePost = function (req, callback) {
    var data = '';
    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        if (data != '') {
            data = JSON.parse(data);
        }
        callback(data);
    });
};
app.all('*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');
    if (req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1) {
        parsePost(req, function (data) {
            if (data && data != '') {
                req.body = data;
            }
            next();
        });
    }
    else {
        next();
    }
});
app.get("/", function (request, response) {
    response.json({
        name: "SCM Micro supply chain management"
    });
});
app.use(function (err, request, response, next) {
    response.status(err.status || 500);
    response.json({
        error: "Server error"
    });
});
var appRestRouter = express.Router();
var AppController_1 = require("./routes/AppController");
var appController = new AppController_1.AppController();
appController.registerRoutes(appRestRouter);
app.use('/api', appRestRouter);
var server = app.listen(3003);
exports.server = server;
console.log("server is running on port no 3003");
//# sourceMappingURL=app.js.map