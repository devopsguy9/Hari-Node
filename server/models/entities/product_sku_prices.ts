import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne ,JoinColumn} from "typeorm";
import {product_skues} from './product_skues';

@Entity()
export class product_sku_prices {

    @PrimaryGeneratedColumn()
    id: number;

   
    @OneToOne(type=>product_skues,product_sku_id=>product_sku_id.product_sku_prices,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku_id: product_skues;

    @Column()
    price: number;

    @Column()
    effective: boolean;

   
}