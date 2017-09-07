import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { DwellingService } from '../../services/dwellingService';

export class DwellingController{
    private router: Router = Router();

    getRouter():Router{
        this.router.get('/', async(request: Request,response: Response)=>{
            console.log("hello");
          //  App.Send(request,response,);
        })

      
        this.router.put('/addDwelling',async(request: Request,response:Response)=>{
            console.log("in add dwelling");
            let dwellingItem = request.body.data;
            console.log(dwellingItem);
            const dwelling_service = new DwellingService();
            let result = dwelling_service.saveDwelling(dwellingItem);
            App.Send(request,response,result);

        })

        this.router.get('/getDwelling/:id',async(request: Request,response:Response)=>{
            console.log("in getDwellingbyid");
            let dwellingItem = request.params.id;
            console.log(dwellingItem);
           const dwelling_service = new DwellingService();
            let result = dwelling_service.getDwellingById(dwellingItem);
            App.Send(request,response,result);

        })

       this.router.post('/getAllDwellings',async(request: Request,response:Response)=>{
            console.log("in getAllDwellings"); 
           const user_service = new DwellingService();
           let result = user_service.getUsers();
           App.Send(request,response,result);

        })

        /*   this.router.post('/updateDwelling/:id',async(request: Request,response:Response)=>{
            console.log("in updateUser"); 
            let user_id =  request.params.id;
            console.log(user_id)
            let reqObj = request.body;
            console.log(reqObj)
           const user_service = new DwellingService();
            let result = user_service.updateUser(user_id,reqObj);
            App.Send(request,response,result);

        })   */
/*

        this.router.get('/deleteUser/:id',async(request: Request,response:Response)=>{
            console.log("in deleteUser");
            let userItem = request.params.id;
            console.log(userItem);
           const user_service = new UserService();
            let result = user_service.deleteUserById(userItem);
            App.Send(request,response,result);

        })
*/



        return this.router;
    }
}