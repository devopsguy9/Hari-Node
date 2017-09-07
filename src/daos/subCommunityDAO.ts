import { getEntityManager, Repository } from "typeorm";
import { SubCommunity } from "../models/entities/subCommunities";
import{BaseDAO} from "../config/baseDAO";

export class SubCommunityDAO extends BaseDAO<SubCommunity>{
    
public rep: Repository<SubCommunity>;

    constructor() {
    super(SubCommunity);
        this.rep = getEntityManager().getRepository(SubCommunity);
    }
    
   /* findOneById(data:SubCommunity){
        return this.rep.findOne(data,{
            alias : "communities",
            innerJoinAndSelect:{
                "community_id" :  "communities.id"
                
            }
        });
    }   */


   findAll(){
        return this.rep.find({},{
            alias : "sub_communities",
            innerJoinAndSelect :{
                "communities": "sub_communities.community_id"
            }

        })
    }

    


    
 
    }

    
    
    
    
    

Object.seal(SubCommunityDAO);

