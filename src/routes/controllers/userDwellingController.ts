import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { UserDwellingService } from '../../services/userDwellingService';

export class UserDwellingController{
    private router: Router = Router();
    private userDwellingService = new UserDwellingService();
    
    getRouter():Router{


        this.router.put('/',async(request: Request, response:Response)=> {
            let userDwellingItem = request.body.data;
           // console.log(userDwellingItem);
            let result = this.userDwellingService.save(userDwellingItem);
            App.Send(request, response, result);
            
        
        })


        this.router.post("/", async(request: Request, response: Response) => {
            //  let reqData= request.body ? request.body.data : {};
              const result = this.userDwellingService.findAll();
              App.Send(request, response, result);
  
          });


        return this.router;
    }
}