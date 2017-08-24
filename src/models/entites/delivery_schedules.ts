import { user_billings } from './user_billings';
import { product_skues } from './product_skues';
import { user_dwellings } from './user_dwellings';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {sub_communities} from './sub_communities';


@Entity("delivery_schedules")
export class delivery_schedules{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"sub_community_id"})
    sub_community_id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>user_dwellings)
    user_dwelling_id:number;

    @JoinColumn({name:"product_sku_id"})
    @ManyToMany(type=>product_skues)
    product_sku_id:number;

    @Column({name:"quantity"})
    quantity:number;

    // @JoinColumn({name:"user_billing_id"})
    // @OneToMany(type=>user_billings,user_billings=>user_billings.user_b)
    // user_billing_id:number;

    @Column({name:"supplier_id"})
    supplier_id:number;

    @Column({name:"delivery_date"})
    delivery_date:Date;

    @Column({name:"community_id"})
    community_id:number;

}