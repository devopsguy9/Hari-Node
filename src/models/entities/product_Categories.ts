import { products } from './products';
import { consumable_Product_Categories } from './consumable_Product_Categories';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn} from 'typeorm';


@Entity("product_categories")
export class product_Categories{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"consumable_product_categories"})
    @ManyToOne(type=>consumable_Product_Categories)
    consumable_product_categories_id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({name:"active"})
    active:boolean;

}