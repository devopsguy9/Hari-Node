import { UsersController } from '../routes/controllers/usersController';
import { getEntityManager, Repository } from "typeorm";
import { UserDwelling } from "../models/entities/userDwellings";
import {User} from '../models/entities/users';
import{BaseDAO} from "../config/baseDAO";



export class UserDwellingDAO extends BaseDAO<UserDwelling>{
    
public rep: Repository<UserDwelling>;
public rep1: Repository<User>;

    constructor() {
    super(UserDwelling);
        this.rep = getEntityManager().getRepository(UserDwelling);
        this.rep1 = getEntityManager().getRepository(User);
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

    entity(id){
        return this.rep.findOneById(id,{
            alias : "userdwelling",
            innerJoinAndSelect:{
                "users" : "userdwelling.users",
                "dwellings" : "userdwelling.dwellings",
                "subcommunities" : "dwellings.subCommunity",
                "community" : "subcommunities.community"


            }
        });
    }

    findAlll(id){
        return this.rep1.findOneById(id,{
            alias : "user",
            innerJoinAndSelect:{
                "user_dwelling" : "user.user_dwellings",
                "dwellings" : "user_dwelling.dwellings",
                "sub_communities" : "dwellings.subCommunity",
                "community" : "sub_communities.community"

            }
        });
    }
   
}

    
    
    
    
    

Object.seal(UserDwellingDAO);
