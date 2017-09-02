import { getEntityManager, Repository } from "typeorm";
import { SubCommunities } from "../models/entities/subCommunities";
import{BaseDAO} from "../config/baseDAO";

export class SubCommunityDAO extends BaseDAO<SubCommunities>{
    
private rep: Repository<SubCommunities>;

    constructor() {
    super(SubCommunities);
        this.rep = getEntityManager().getRepository(SubCommunities);
    }
    
    

 
    }

    
    
    
    
    

Object.seal(SubCommunityDAO);

