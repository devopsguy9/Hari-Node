import { getEntityManager, Repository } from "typeorm";
import { users } from "../models/entities/users";
import{BaseDAO} from "../config/baseDAO";

export class usersDAO extends BaseDAO<users>{
    
private rep: Repository<users>;

    constructor() {
    super(users);
        this.rep = getEntityManager().getRepository(users);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(usersDAO);

