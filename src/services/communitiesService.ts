import {App} from '../utils/App';
import {communities} from '../models/entites/communities';
import {communitesDAO} from '../dao/communitiesDAO';


export class communitiesService{

    private communitesDAO:communitesDAO;

    constructor()
{
    this.communitesDAO = new communitesDAO();
}

    async search(reqData:any){
        try{
            let data:any = await this.communitesDAO.search(reqData);
            return Promise.resolve(data)
        }catch(error){
            return Promise.reject(error);
        }
    }
}