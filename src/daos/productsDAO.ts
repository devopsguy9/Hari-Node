import { getEntityManager, Repository } from "typeorm";
import { products } from "../models/entities/products";
import{BaseDAO} from "../config/baseDAO";

export class productsDAO extends BaseDAO<products>{
    
private rep: Repository<products>;

    constructor() {
    super(products);
        this.rep = getEntityManager().getRepository(products);
    }
    
    
  

 
    }

    
    
    
    
    

Object.seal(productsDAO);

