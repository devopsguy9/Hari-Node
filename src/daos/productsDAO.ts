import { getEntityManager, Repository } from "typeorm";
import { Product } from "../models/entities/products";
import{BaseDAO} from "../config/baseDAO";

export class ProductsDAO extends BaseDAO<Product>{
    
private rep: Repository<Product>;

    constructor() {
    super(Product);
        this.rep = getEntityManager().getRepository(Product);
    }
    
    
  

 
    }

    
    
    
    
    

Object.seal(ProductsDAO);

