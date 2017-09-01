import { suppliers } from './suppliers';
import { consumable_Product_Categories } from './consumable_Product_Categories';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';


@Entity("consumable_product_suppliers")
export class consumable_Product_Suppliers{
    @JoinTable({name:"consumable_product_categories_id"})
    @PrimaryColumn({name:"consumable_product_categories_id"})
    @ManyToMany(type=>consumable_Product_Categories)
    consumable_product_id:number;

    @JoinTable({name:"suppliers_id"})
    //@PrimaryColumn({name:"supplier_id"})
    @ManyToMany(type=>suppliers)
    supplier_id:number;

}