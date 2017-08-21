import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {manufacturers} from './manufacturers';
import {product_skues} from './product_skues';

@Entity()
export class daily_order_sheets {

    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(type=>manufacturers,manufacture_id=>manufacture_id.daily_order_sheets,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    manufacture_id:manufacturers;

    @ManyToMany(type=>product_skues,product_sku__id=>product_sku__id.daily_order_sheets,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku__id:product_skues;
    
    @Column()
    order_date: Date;

    @Column()
    quantity: number;

    @Column()
    suplier_id: number;
   
}