import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { UserDwellingService } from '../../services/userDwellingService';

export class UserDwellingController{
    private router: Router = Router();

    getRouter():Router{
        this.router.get('/', async(request: Request,response: Response)=>{
            console.log("hello");
          //  App.Send(request,response,);
        })

      
        this.router.put('/addUserDwelling',async(request: Request,response:Response)=>{
            console.log("in add user dwelling");
            let userDwellingItem = request.body;
            console.log(userDwellingItem);
            const userDwelling_service = new UserDwellingService();
            let result = userDwelling_service.saveUserDwelling(userDwellingItem);
            App.Send(request,response,result);

        })

        this.router.get('/getUserDwelling/:id',async(request: Request,response:Response)=>{
            console.log("in getUserDwelling");
            let userDwellingItem = request.params.id;
            console.log(userDwellingItem);
           const userDwelling_service = new UserDwellingService();
            let result = userDwelling_service.getUserDwellingById(userDwellingItem);
            App.Send(request,response,result);

        })

       this.router.get('/getAllUserDwellings',async(request: Request,response:Response)=>{
            console.log("in getAllUserDwellings"); 
           const userDwelling_service = new UserDwellingService();
            let result = userDwelling_service.getUserDwellings();
            App.Send(request,response,result);

        })

     /*    this.router.post('/updateUser/:id',async(request: Request,response:Response)=>{
            console.log("in updateUser"); 
            let user_id =  request.params.id;
            console.log(user_id)
            let reqObj = request.body;
            console.log(reqObj)
           const user_service = new UserService();
            let result = user_service.updateUser(user_id,reqObj);
            App.Send(request,response,result);
        })
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