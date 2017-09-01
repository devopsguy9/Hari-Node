import { getEntityManager, Repository } from "typeorm";
import { sub_Communities } from "../models/entities/sub_communities";
import{BaseDAO} from "../config/baseDAO";

export class SubCommunityDAO extends BaseDAO<sub_Communities>{
    
private rep: Repository<sub_Communities>;

    constructor() {
    super(sub_Communities);
        this.rep = getEntityManager().getRepository(sub_Communities);
    }
    
    

 
    }

    
    
    
    
    

Object.seal(SubCommunityDAO);

