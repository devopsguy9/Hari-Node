import {DemoController} from "./controllers/DemoController";


export class AppController {
    private router: any;

    // constructor(router) {
    //     this.router = router;
    //     this.registerRoutes(this.router);
    // }

    registerRoutes(router: any) {
        router.use("/demo", new DemoController().getRouter());
       
    }
}
