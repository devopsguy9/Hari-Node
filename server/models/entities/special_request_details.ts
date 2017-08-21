import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {product_skues} from './product_skues';

@Entity()
export class special_request_details {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    special_request_id: number;


    @ManyToMany(type=>product_skues,product_sku__id=>product_sku__id.special_request_details,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku__id:product_skues;


    @Column()
    quantity: number;

   
}