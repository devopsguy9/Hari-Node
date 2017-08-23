import { getEntityManager,Repository} from "typeorm";
import {communities} from '../models/entites/communities';

export class communitesDAO{
    private dao:Repository<communities>;

    constructor(){
        this.dao = getEntityManager().getRepository(communities);
    }

    search(data:any){
        return this.dao.find(data)
    }

    save(data:communities){
        return this.dao.persist(data);
    }
}