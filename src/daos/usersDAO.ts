import { getEntityManager, Repository } from "typeorm";
import { Users } from "../models/entities/users";
import{BaseDAO} from "../config/baseDAO";

export class UsersDAO extends BaseDAO<Users>{
    
private rep: Repository<Users>;

    constructor() {
    super(Users);
        this.rep = getEntityManager().getRepository(Users);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(UsersDAO);

