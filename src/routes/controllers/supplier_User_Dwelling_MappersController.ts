import { supplier_User_Dwelling_Mappers } from '../../models/entities/supplier_User_Dwelling_Mappers';
import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { supplier_User_Dwelling_MappersService } from "../../services/supplier_User_Dwelling_MappersService";

export class supplier_User_Dwelling_MappersController {
    
        private router: Router = Router();
        private supplier_User_Dwelling_MappersService = new supplier_User_Dwelling_MappersService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.supplier_User_Dwelling_MappersService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.supplier_User_Dwelling_MappersService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.supplier_User_Dwelling_MappersService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.supplier_User_Dwelling_MappersService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
        }
    }
    