import { Router,Request,Response } from "express";
import { App } from '../../utils/App';
import { SubCommunityService } from '../../services/subCommunityService';

export class SubCommunityController{
    private router: Router = Router();

    getRouter():Router{
        this.router.get('/', async(request: Request,response: Response)=>{
            console.log("hello");
            //App.Send(request,response,);
        })

      
        this.router.put('/addSubCommunity',async(request: Request,response:Response)=>{
            console.log("in add addSubCommunity");
            let subCommunityItem = request.body.data;
            console.log(subCommunityItem);
            const sub_community_service = new SubCommunityService();
            let result = sub_community_service.saveSubCommunity(subCommunityItem);
            App.Send(request,response,result);

        })

       this.router.get('/getSubCommunity/:id',async(request: Request,response:Response)=>{
            console.log("in getSubCommunity");
            let subCommunityItem = request.params.id;
            console.log(subCommunityItem);
           const sub_community_service = new SubCommunityService();
            let result = sub_community_service.getSubCommunityById(subCommunityItem);
            App.Send(request,response,result);

        })

          this.router.get('/getAllSubCommunities',async(request: Request,response:Response)=>{
            console.log("in getAllSubCommunities"); 
           const sub_community_service = new SubCommunityService();
            let result = sub_community_service.getAllSubCommunities();
            App.Send(request,response,result);

        })

        this.router.put('/updateSubCommunity/:id',async(request: Request,response:Response)=>{
            console.log("in updateSubCommunity"); 
            let sub_community_id =  request.params.id;
            console.log(sub_community_id)
            let reqObj = request.body;
            console.log(reqObj)
           const sub_community_service = new SubCommunityService();
            let result = sub_community_service.updateSubCommunity(sub_community_id,reqObj);
            App.Send(request,response,result);

        })


    /*      this.router.get('/deleteUser/:id',async(request: Request,response:Response)=>{
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