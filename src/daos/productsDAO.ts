import { getEntityManager, Repository } from "typeorm";
import { Products } from "../models/entities/products";
import{BaseDAO} from "../config/baseDAO";

export class ProductsDAO extends BaseDAO<Products>{
    
private rep: Repository<Products>;

    constructor() {
    super(Products);
        this.rep = getEntityManager().getRepository(Products);
    }
    
    
  

 
    }

    
    
    
    
    

Object.seal(ProductsDAO);

