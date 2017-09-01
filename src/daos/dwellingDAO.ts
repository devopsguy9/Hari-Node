import { getEntityManager, Repository } from "typeorm";
import { dwellings } from "../models/entities/dwellings";
import{BaseDAO} from "../config/baseDAO";

export class DwellingDAO extends BaseDAO<dwellings>{
    
private rep: Repository<dwellings>;

    constructor() {
    super(dwellings);
        this.rep = getEntityManager().getRepository(dwellings);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(DwellingDAO);

