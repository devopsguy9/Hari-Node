import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { hold_RequestsService } from "../../services/hold_RequestsService";

export class hold_RequestsController {
    
        private router: Router = Router();
        private hold_RequestsService = new hold_RequestsService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.hold_RequestsService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.hold_RequestsService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.hold_RequestsService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.hold_RequestsService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
    }
}