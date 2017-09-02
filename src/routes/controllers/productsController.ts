import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { ProductsService } from '../../services/ProductsService';

export class ProductsController {
    
        private router: Router = Router();
        private ProductsService = new ProductsService();

        getRouter():Router{
    
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.ProductsService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.ProductsService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.ProductsService.findOneById(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.ProductsService.delete(id);
            App.Send(request, response, result);
        });

            return this.router;
    }
}