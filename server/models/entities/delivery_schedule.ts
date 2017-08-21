import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {sub_community} from './sub_community';
import {user_dwelling} from './user_dwelling';

@Entity()
export class delivery_schedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sub_community_id: number;
    
    @Column()
    user_dwelling_id: number;

    @Column()
    product_sku_id: number;

    @Column()
    quantity: number;

    @Column()
    user_billing_id: number;

    @Column()
    supplier_id: number;

    @Column()
    delivery_date: Date;

    @Column()
    community_id: number;

    @ManyToOne(type=>sub_community,sub_community=>sub_community.id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    sub_community:sub_community;

    @ManyToOne(type=>user_dwelling,user_dwelling=>user_dwelling.delivery_schedule,{
        cascadeInsert:true
    })
    user_dwelling:user_dwelling


   
}