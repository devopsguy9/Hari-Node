import { products } from './products';
import { consumable_product_categories } from './consumable_product_categories';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn} from 'typeorm';


@Entity("product_categories")
export class product_categories{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"consumable_product_categories"})
    @ManyToOne(type=>consumable_product_categories)
    consumable_product_categories_id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({name:"active"})
    active:boolean;

}