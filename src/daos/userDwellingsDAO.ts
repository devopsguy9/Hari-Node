import { getEntityManager, Repository } from "typeorm";
import { UserDwelling } from "../models/entities/userDwellings";
import{BaseDAO} from "../config/baseDAO";



export class UserDwellingDAO extends BaseDAO<UserDwelling>{
    
public rep: Repository<UserDwelling>;

    constructor() {
    super(UserDwelling);
        this.rep = getEntityManager().getRepository(UserDwelling);
    }
    
    
    findAll(){
        return this.rep.find({},{
            alias : "userdwelling",
            innerJoinAndSelect:{
                "users" : "userdwelling.users",
                "dwellings" : "userdwelling.dwellings",
                "subcommunities" : "dwellings.subCommunity",
                "community" : "subcommunities.community"


            }
        });
    }
 
    }

    
    
    
    
    

Object.seal(UserDwellingDAO);
