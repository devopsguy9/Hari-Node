import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { DemoService } from "../../services/DemoService";
export class DemoController {
    private router: Router = Router();
    getRouter(): Router{

      this.router.get('/', async (request: Request,  response: Response) => {
          let red=request.body;
         var demoService = new DemoService();
         var result = demoService.greet(red);
         App.Send(request, response, result);    
         
      });
          return this.router;
    }
}
