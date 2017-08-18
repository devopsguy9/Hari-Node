"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var swaggerJSDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var fs_1 = require("fs");
var path = require("path");
var APIDocs = (function () {
    function APIDocs() {
        this.router = express_1.Router();
    }
    APIDocs.prototype.getRouter = function () {
        var _this = this;
        var docsJsonPath = '/api-docs.json';
        this.router.get(docsJsonPath, function (req, res) {
            var config = _this.getConfig(_this.getHost(req, false));
            var swaggerUiHandler = swaggerUi.setup(config);
            res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
            res.send(config);
        });
        this.router.use('/docs', swaggerUi.serve, function (req, res, next) {
            var config = _this.getConfig(_this.getHost(req, false));
            var swaggerUiHandler = swaggerUi.setup(_this.getConfig(config));
            if (!req.query.url) {
                res.redirect("/swagger/docs?url=" + _this.getHost(req, true) + "/swagger" + docsJsonPath);
            }
            else {
                swaggerUiHandler(req, res, next);
            }
        });
        return this.router;
    };
    APIDocs.prototype.getHost = function (req, needProtype) {
        return "" + (needProtype ? 'http://' : '') + req.headers.host;
    };
    APIDocs.prototype.getConfig = function (host) {
        var apiList = APIDocs.getAllRoutes(path.join(__dirname, './../../docs/api-docs'), null);
        console.log(host);
        console.log(apiList);
        var spec = swaggerJSDoc({
            swaggerDefinition: {
                info: {
                    title: 'Education',
                    version: '1.0.0'
                },
                host: host,
                basePath: '/api/',
                produces: ['application/json'],
                consumes: ['application/x-www-form-urlencoded', 'application/json'],
                securityDefinitions: {
                    jwt: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'header'
                    }
                },
                security: [
                    { jwt: [] }
                ]
            },
            apis: apiList
        });
        return spec;
    };
    APIDocs.getAllRoutes = function (dir, filelist) {
        var _files = fs_1.readdirSync(dir);
        filelist = filelist || [];
        _files
            .map(function (file) {
            // filter out .map and hidden files
            if (file.search(".map") < 0 && file.search(/^\./) < 0) {
                if (fs_1.statSync(path.join(dir, file)).isDirectory()) {
                    filelist = APIDocs.getAllRoutes(path.join(dir, file), filelist);
                }
                else {
                    if (file.search(".yaml") > 0) {
                        filelist.push(path.join(dir, file));
                    }
                }
            }
        });
        return filelist;
    };
    return APIDocs;
}());
exports.APIDocs = APIDocs;
//# sourceMappingURL=ApiDocs.js.map