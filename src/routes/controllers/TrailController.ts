import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { TrailService } from '../../services/TrailService';

export class TrailController{
    private router: Router = Router();

    getRouter():Router{
        this.router.get('/', async(request: Request,response: Response)=>{
            let reqdata = request.body;
            console.log(reqdata);
            const trailService = new TrailService();
            var result = trailService.entity(reqdata);
            App.Send(request,response,result);
        })

        this.router.post('/',async(request:Request,response:Response)=>{
            var result = request.body;
            console.log(result);
            App.Send(request,response,result);
        })
        return this.router;
    }
}