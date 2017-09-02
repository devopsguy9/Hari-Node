import { SupplierUserDwellingMappers } from '../../models/entities/supplierUserDwellingMappers';
import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { SupplierUserDwellingMappersService } from "../../services/supplierUserDwellingMappersService";

export class SupplierUserDwellingMappersController {
    
        private router: Router = Router();
        private supplier_User_Dwelling_MappersService = new SupplierUserDwellingMappersService();

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
    