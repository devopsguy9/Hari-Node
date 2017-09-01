import { getEntityManager, Repository } from "typeorm";
import { communities } from "../models/entities/communities";
import {BaseDAO} from "../config/baseDAO";

export class CommunityDAO extends BaseDAO<communities>{
    
private rep: Repository<communities>;

    constructor() {
        super(communities);
    this.rep = getEntityManager().getRepository(communities);

    }
    
   /* validate(data: any){
    return true;
    }
    
*/
 
    }

    
    
    
    
    

Object.seal(CommunityDAO);

