import { getEntityManager, Repository } from "typeorm";
import { Dwelling } from "../models/entities/dwellings";
import{BaseDAO} from "../config/baseDAO";

export class DwellingDAO extends BaseDAO<Dwelling>{
    
public rep: Repository<Dwelling>;

    constructor() {
    super(Dwelling);
        this.rep = getEntityManager().getRepository(Dwelling);
    }
    
    
  /*  save(data:user){
        console.log("In user DAO");
    return this.rep.persist(data);
    }
    
*/

 
    }

    
    
    
    
    

Object.seal(DwellingDAO);

