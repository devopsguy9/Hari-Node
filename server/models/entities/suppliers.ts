import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {consumable_product_suppliers} from './consumable_product_suppliers';


@Entity()
export class suppliers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    mobile: string;

    @Column()
    comments: string;

    @Column()
    active: string;

    @ManyToMany(type=>consumable_product_suppliers,consumable_product_suppliers=>consumable_product_suppliers.consumable_product_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    consumable_product_suppliers: consumable_product_suppliers;
   
}