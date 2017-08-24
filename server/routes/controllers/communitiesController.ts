import { communities } from '../../models/entites/communities';
import { Router,Request,Response} from "express";
import { App } from '../../utils/App';
import {communitiesService} from '../../services/communitiesService';

export class communitiesController {
    private router:Router=Router();
    private communitiesService = new communitiesService();

    getRouter():Router {
        this.router.post('/',async(request:Request,response:Response)=>{
            let reqData = request.body?request.body.data:{};
            const result = this.communitiesService.search(reqData);
            App.Send(request,response,result);
        })

        return this.router;
    }
}