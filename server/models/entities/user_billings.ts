import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany ,JoinColumn} from "typeorm";
import {user_dwellings} from './user_dwellings';
import {product_skues} from './product_skues';


@Entity()
export class user_billings {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    billed_date: Date;

    @OneToMany(type=>product_skues,product_skues=>product_skues.user_billings,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku_id:  product_skues;

    @Column()
    day_price: number;

    @Column()
    total_price: number;

    @Column()
    hold_request_id: number;

    @Column()
    special_request_id: number;

    @Column()
    supplier_id: number;

    @ManyToOne(type=>user_dwellings,user_dwelling_id=>user_dwelling_id.user_billing,{
        cascadeInsert:true
    })
    user_dwelling:user_dwellings

   
}