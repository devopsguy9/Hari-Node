import { UserBilling } from './userBillings';
import { Product } from './products';
import {ProductSkuPrice} from './productSkuPrices';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';


@Entity("product_skus")
export class ProductSku{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"products_id"})
    @ManyToOne(type=>Product)
    products_id:Product;


    @Column({name:"active"})
    active:boolean;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinColumn({name:"total_price"})
    @ManyToOne(type=>UserBilling)
    user_billings:UserBilling;

}