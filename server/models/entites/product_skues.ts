import { products } from './products';
import {product_sku_prices} from './product_sku_prices';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';


@Entity("product_skues")
export class product_skues{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"product_id"})
    @ManyToOne(type=>products)
    product_id:number;

    @JoinColumn({name:"product_sku_prices_id"})
    @OneToOne(type=>product_sku_prices)
    product_sku_prices:number;

    @Column({name:"active"})
    active:boolean;

    @Column({
        name:"name",
        length:128
    })
    name:string;

}