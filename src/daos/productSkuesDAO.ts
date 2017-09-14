import { getEntityManager, Repository } from "typeorm";
import { ProductSku } from "../models/entities/productSku";
import{BaseDAO} from "../config/baseDAO";

export class ProductSkuesDAO extends BaseDAO<ProductSku>{
    public rep: Repository<ProductSku>;
    
        constructor() {
        super(ProductSku);
            this.rep = getEntityManager().getRepository(ProductSku);
        }
        findAll(){
            return this.rep.find({},{
                alias : "productskues",
                innerJoinAndSelect:{
                    "products" : "productskues.products_id",
                    
                }
    
                });
        }
        
        entity(id: any) {
            return this.rep.findOneById(id,{
                alias: "productskues",
                innerJoinAndSelect: {
                    "products" : "productskues.products_id",
    
                   
                },  
            });
        } 
    }

    
    
    
    
    

Object.seal(ProductSkuesDAO);

