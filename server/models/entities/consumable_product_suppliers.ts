import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany,JoinColumn} from "typeorm";
import {consumable_product_categories} from './consumable_product_categories';
import {suppliers} from './suppliers';

@Entity()
export class consumable_product_suppliers {

    @PrimaryGeneratedColumn()
    id: number;

  
    @ManyToMany(type=>consumable_product_categories,consumable_product_categories=>consumable_product_categories.consumable_product_suppliers,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    consumable_product_id: consumable_product_categories;


    @ManyToMany(type=>suppliers,supplier_id=>supplier_id.consumable_product_suppliers,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    supplier_id: suppliers;


   
}