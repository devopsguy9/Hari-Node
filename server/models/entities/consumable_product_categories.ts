import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany ,ManyToMany ,JoinColumn} from "typeorm";
import {product_categories} from './product_categories';
import {consumable_product_suppliers} from './consumable_product_suppliers';

@Entity()
export class consumable_product_categories {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 128
    })
    name: string;

    @Column()
    active: boolean;

    @OneToMany(type=>product_categories,product_categories=>product_categories.consumable_product_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_categories:product_categories;

    @ManyToMany(type=>consumable_product_suppliers,consumable_product_suppliers=>consumable_product_suppliers.consumable_product_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    consumable_product_suppliers:consumable_product_suppliers;

 
}