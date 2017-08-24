import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";

import "reflect-metadata";

//process.env.NODE_ENV = "testing";

const app: express.Application = express();
app.use(json());

var parsePost = function (req:any, callback:any) {
    var data = '';
    req.on('data', function (chunk:any) {
        data += chunk;
    });
    req.on('end', function () {
        if (data != '') {
            data = JSON.parse(data);
        }
        callback(data);
    });
}


app.all('*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');

    if (req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1) {
        parsePost(req, function (data:any) {
            if (data && data != '') {
                req.body = data;
            }
            next();
        });
    } else {
        next();
    }

});

app.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        name: "MilkMan stated guys be ready"
    })
});

app.use((err:Error & {status:number},request:express.Request,response:express.Response,next:express.NextFunction):void=>{
    response.status(err.status || 500);
    response.json({
        error:"Server error"
    })
});

var appRestRouter = express.Router();
import { AppController } from './routes/AppController';
let appController = new AppController();
appController.registerRoutes(appRestRouter);
app.use('/api',appRestRouter)

const server : http.Server = app.listen(3000);

console.log("Hello server you are at port 3000");

export { server };