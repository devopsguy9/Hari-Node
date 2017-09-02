import { getEntityManager, Repository } from "typeorm";
import { Dwellings } from "../models/entities/dwellings";
import{BaseDAO} from "../config/baseDAO";

export class DwellingDAO extends BaseDAO<Dwellings>{
    
private rep: Repository<Dwellings>;

    constructor() {
    super(Dwellings);
        this.rep = getEntityManager().getRepository(Dwellings);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(DwellingDAO);

