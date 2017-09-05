import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { CommunityService } from '../../services/communityService';

export class CommunityController{
    private router: Router = Router();

    getRouter():Router{
        this.router.get('/', async(request: Request,response: Response)=>{
            console.log("hello");
          //  App.Send(request,response,);
        })

      
        this.router.put('/addCommunity',async(request: Request,response:Response)=>{
            console.log("in add user");
            let communityItem = request.body.data;
            console.log(communityItem);
            const community_service = new CommunityService();
            let result = community_service.saveUser(communityItem);
            App.Send(request,response,result);

        })

      this.router.get('/getCommunity/:id',async(request: Request,response:Response)=>{
            console.log("in getCommunitybyid");
            let communityItem = request.params.id;
            console.log(communityItem);
           const community_service = new CommunityService();
            let result = community_service.getCommunityById(communityItem);
            App.Send(request,response,result);

        })

        this.router.post('/getAllCommunities',async(request: Request,response:Response)=>{
            console.log("in getAllCommunities"); 
           const community_service = new CommunityService();
            let result = community_service.getCommunities();
            App.Send(request,response,result);

        })

         this.router.put('/updateCommunity/:id',async(request: Request,response:Response)=>{
            console.log("in updateCommunity"); 
            let community_id =  request.params.id;
            console.log(community_id)
            let reqObj = request.body.data;
            console.log(reqObj)
           const community_service = new CommunityService();
            let result = community_service.updateCommunity(community_id,reqObj);
            App.Send(request,response,result);

        })


      /*    this.router.get('/deleteUser/:id',async(request: Request,response:Response)=>{
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