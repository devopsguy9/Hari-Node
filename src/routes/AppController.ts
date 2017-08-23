import { TrailController } from "./controllers/TrailController";

export class AppController {

    private router:any;

    registerRoutes(router:any){
        router.use("/trail",new TrailController().getRouter());
    }
}