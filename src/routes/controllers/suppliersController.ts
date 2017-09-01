import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { suppliersService } from "../../services/suppliersService";

export class suppliersController {
    
        private router: Router = Router();
        private suppliersService = new suppliersService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.suppliersService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.suppliersService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.suppliersService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.suppliersService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
        }
    }
    