import { getEntityManager, Repository } from "typeorm";
import { user_Dwellings } from "../models/entities/user_dwellings";
import{BaseDAO} from "../config/baseDAO";

export class UserDwellingDAO extends BaseDAO<user_Dwellings>{
    
private rep: Repository<user_Dwellings>;

    constructor() {
    super(user_Dwellings);
        this.rep = getEntityManager().getRepository(user_Dwellings);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(UserDwellingDAO);

