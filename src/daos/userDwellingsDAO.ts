import { getEntityManager, Repository } from "typeorm";
import { UserDwelling } from "../models/entities/userDwellings";
import{BaseDAO} from "../config/baseDAO";



export class UserDwellingDAO extends BaseDAO<UserDwelling>{
    
public rep: Repository<UserDwelling>;

    constructor() {
    super(UserDwelling);
        this.rep = getEntityManager().getRepository(UserDwelling);
    }
    
    
 
 
    }

    
    
    
    
    

Object.seal(UserDwellingDAO);
