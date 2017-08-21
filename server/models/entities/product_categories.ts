import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne ,JoinColumn} from "typeorm";
import {consumable_product_categories} from './consumable_product_categories';
import {products} from './products';

@Entity()
export class product_categories {

    @PrimaryGeneratedColumn()
    id: number;

   
    @ManyToOne(type=>consumable_product_categories,consumable_product_categories=>consumable_product_categories.product_categories,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    consumable_product_id: consumable_product_categories;

    @OneToOne(type=>products,products=>products.product_category_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    products: products;

    @Column({
        length:128
    })
    name: string;
    
    @Column()
    active: boolean;
   
}