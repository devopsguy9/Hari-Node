import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { UsersService } from '../../services/userService';

export class UsersController{
    private router: Router = Router();

    getRouter():Router{
        this.router.get('/', async(request: Request,response: Response)=>{
            console.log("hello");
          //  App.Send(request,response,);
        })

      
        this.router.put('/adduser',async(request: Request,response:Response)=>{
            console.log("in add user");
            let userItem = request.body.data;
            console.log(userItem);
            const user_service = new UsersService();
            let result = user_service.saveUser(userItem);
            App.Send(request,response,result);

        })

        this.router.get('/getUser/:id',async(request: Request,response:Response)=>{
            console.log("in getUserById");
            let userItem = request.params.id;
            console.log(userItem);
           const user_service = new UsersService();
            let result = user_service.getUserById(userItem);
            App.Send(request,response,result);

        })

          this.router.post('/getAllUsers',async(request: Request,response:Response)=>{
            console.log("in getAllUsers"); 
           const user_service = new UsersService();
            let result = user_service.getUsers();
            App.Send(request,response,result);

        })

         this.router.put('/updateUser/:id',async(request: Request,response:Response)=>{
            console.log("in updateUser"); 
            let user_id =  request.params.id;
            console.log(user_id)
            let reqObj = request.body;
            console.log(reqObj)
           const user_service = new UsersService();
            let result = user_service.updateUser(user_id,reqObj);
            App.Send(request,response,result);

        })


        this.router.get('/deleteUser/:id',async(request: Request,response:Response)=>{
            console.log("in deleteUser");
            let userItem = request.params.id;
            console.log(userItem);
           const user_service = new UsersService();
            let result = user_service.deleteUserById(userItem);
            App.Send(request,response,result);

        })




        return this.router;
    }
}