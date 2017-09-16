import { ProductSkuPrice } from './productSkuPrices';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn ,OneToMany,OneToOne} from 'typeorm';
import {UserBilling} from './userBillings';
import {Product} from './products';

@Entity("product_skus")
export class ProductSku{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"name"})
    name:string;

    @Column({name:"active"})
    active:boolean;

    @JoinColumn({name:"products"})
    @ManyToOne(type=>Product)
    products:Product;

    @Column({name:"price"})
    price:number;

    @Column({name:"effective"})
    effective:Date;

    //@Column({name:"user_billings"})
    @OneToMany(type=>UserBilling,user_billings=>user_billings.product_skus)
    user_billings:UserBilling;

  
    // @OneToOne(type=>ProductSkuPrice,product_sku_prices=>product_sku_prices.product_sku_id)
    // product_sku_prices:ProductSkuPrice;

}