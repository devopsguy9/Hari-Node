import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

    @JoinColumn({name:"user_billings"})
    @ManyToOne(type=>UserBilling)
    user_billings:UserBilling;

}