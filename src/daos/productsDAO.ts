import { getEntityManager, Repository } from "typeorm";
import { Product } from "../models/entities/products";
import{BaseDAO} from "../config/baseDAO";

export class ProductsDAO extends BaseDAO<Product>{
    
public rep: Repository<Product>;

    constructor() {
    super(Product);
        this.rep = getEntityManager().getRepository(Product);
    }
    
    
    entity(id){
        return this.rep.findOneById(id,{
            alias : "product",
            innerJoinAndSelect:{
                "manufacturers" : "product.manufacturers",
                "product_skus" : "userdwelling.product_skus"

            }
        });
    }

 
    }

    
    
    
    
    

Object.seal(ProductsDAO);

