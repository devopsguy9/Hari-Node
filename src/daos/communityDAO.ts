import { getEntityManager, Repository } from "typeorm";
import { Community } from "../models/entities/communities";
import {BaseDAO} from "../config/baseDAO";

export class CommunityDAO extends BaseDAO<Community>{
    
private rep: Repository<Community>;

    constructor() {
        super(Community);
    this.rep = getEntityManager().getRepository(Community);

    }
    
   /* validate(data: any){
    return true;
    }
    
*/
 
    }

    
    
    
    
    

Object.seal(CommunityDAO);

