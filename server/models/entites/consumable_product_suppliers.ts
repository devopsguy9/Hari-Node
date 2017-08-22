import { suppliers } from './suppliers';
import { consumable_product_categories } from './consumable_product_categories';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,ManyToMany} from 'typeorm';


@Entity("consumable_product_suppliers")
export class consumable_product_suppliers{
    
    @JoinColumn({name:"consumable_product_categories_id"})
    @ManyToMany(type=>consumable_product_categories)
    consumable_product_id:number;

    @JoinColumn({name:"supplier_id"})
    @ManyToMany(type=>suppliers)
    supplier_id:number;

}