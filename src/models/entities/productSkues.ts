import { Products } from './products';
import {ProductSkuPrices} from './productSkuPrices';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';


@Entity("product_skues")
export class ProductSkues{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"product_id"})
    @ManyToOne(type=>Products)
    product_id:number;


    @Column({name:"active"})
    active:boolean;

    @Column({
        name:"name",
        length:128
    })
    name:string;

}