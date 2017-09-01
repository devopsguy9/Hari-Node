import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { user_BillingsService } from "../../services/user_BillingsService";

export class user_BillingsController {
    
        private router: Router = Router();
        private user_BillingsService = new user_BillingsService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.user_BillingsService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.user_BillingsService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.user_BillingsService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.user_BillingsService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
    }
}