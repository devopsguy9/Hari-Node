import { products } from './products';
import {product_Sku_Prices} from './product_Sku_Prices';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';


@Entity("product_skues")
export class product_Skues{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"product_id"})
    @ManyToOne(type=>products)
    product_id:number;


    @Column({name:"active"})
    active:boolean;

    @Column({
        name:"name",
        length:128
    })
    name:string;

}