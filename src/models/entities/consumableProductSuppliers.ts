import { Suppliers } from './suppliers';
import { ConsumableProductCategories } from './consumableProductCategories';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';


@Entity("consumable_product_suppliers")
export class ConsumableProductSuppliers{
    @JoinTable({name:"consumable_product_categories_id"})
    @PrimaryColumn({name:"consumable_product_categories_id"})
    @ManyToMany(type=>ConsumableProductCategories)
    consumable_product_id:number;

    @JoinTable({name:"suppliers_id"})
    //@PrimaryColumn({name:"supplier_id"})
    @ManyToMany(type=>Suppliers)
    suppliers_id:number;

}