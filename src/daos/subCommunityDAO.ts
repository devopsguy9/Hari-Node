import { getEntityManager, Repository } from "typeorm";
import { SubCommunity } from "../models/entities/subCommunities";
import{BaseDAO} from "../config/baseDAO";

export class SubCommunityDAO extends BaseDAO<SubCommunity>{
    
private rep: Repository<SubCommunity>;

    constructor() {
    super(SubCommunity);
        this.rep = getEntityManager().getRepository(SubCommunity);
    }
    
    

 
    }

    
    
    
    
    

Object.seal(SubCommunityDAO);

