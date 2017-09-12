import { UserBilling } from './userBillings';
import { ProductSku } from './productSku';
import { UserDwelling } from './userDwellings';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {SubCommunity} from './subCommunities';


@Entity("delivery_schedules")
export class DeliverySchedule{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"sub_community"})
    sub_communities:number;

    @JoinColumn({name:"user_dwelling"})
    @ManyToOne(type=>UserDwelling)
    user_dwellings:UserDwelling;

    // @JoinTable({name:"product_skus"})
    // @ManyToMany(type=>ProductSku)
    // product_sku_id:ProductSku;

    @Column({name:"quantity"})
    quantity:number;


    @OneToMany(type=>UserBilling,user_billings=>user_billings.delivery_schedules)
    user_billing:UserBilling[];

    @Column({name:"supplier_id"})
    supplier_id:number;

    @Column({name:"delivery_date"})
    delivery_date:Date;

    @Column({name:"community_id"})
    community_id:number;

}