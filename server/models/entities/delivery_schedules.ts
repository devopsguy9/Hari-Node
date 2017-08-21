import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {sub_communities} from './sub_communities';
import {user_dwellings} from './user_dwellings';
import {product_skues} from './product_skues';

@Entity()
export class delivery_schedules {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sub_community_id: number;
    
    @Column()
    user_dwelling_id: number;

    @ManyToMany(type=>product_skues,product_sku__id=>product_sku__id.delivery_schedules,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku__id:product_skues;

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

    @ManyToOne(type=>sub_communities,sub_community=>sub_community.id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    sub_community:sub_communities;

    @ManyToOne(type=>user_dwellings,user_dwelling=>user_dwelling.delivery_schedule,{
        cascadeInsert:true
    })
    user_dwelling:user_dwellings


   
}