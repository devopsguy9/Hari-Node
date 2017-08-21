import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany,OneToOne ,JoinColumn} from "typeorm";
import {manufacturers} from './manufacturers';
import {product_skues} from './product_skues';
import {product_categories} from './product_categories';

@Entity()
export class products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @Column({
        length: 500
    })
    description: string;

    @ManyToOne(type=>manufacturers,manufacture_id=>manufacture_id.products,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    manufacture_id:manufacturers;

    @OneToMany(type=>product_skues,product_skues=>product_skues.product_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_skues:product_skues;

    
    @OneToOne(type=>product_categories,product_categories_id=>product_categories_id.products,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_category_id:product_categories;

    @Column()
    active: boolean;

    @Column()
    supplier_id: number;

   
}