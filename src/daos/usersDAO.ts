import { getEntityManager, Repository } from "typeorm";
import { User } from "../models/entities/users";
import{BaseDAO} from "../config/baseDAO";

export class UsersDAO extends BaseDAO<User>{
    
public rep: Repository<User>;

    constructor() {
    super(User);
        this.rep = getEntityManager().getRepository(User);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(UsersDAO);

