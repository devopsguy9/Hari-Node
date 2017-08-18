"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DemoController_1 = require("./controllers/DemoController");
var AppController = (function () {
    function AppController() {
    }
    // constructor(router) {
    //     this.router = router;
    //     this.registerRoutes(this.router);
    // }
    AppController.prototype.registerRoutes = function (router) {
        router.use("/demo", new DemoController_1.DemoController().getRouter());
    };
    return AppController;
}());
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map