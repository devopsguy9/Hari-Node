import { user_Billings } from './user_Billings';
import { product_Skues } from './product_Skues';
import { user_Dwellings } from './user_Dwellings';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {sub_Communities} from './sub_Communities';


@Entity("delivery_schedules")
export class delivery_Schedules{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"sub_community_id"})
    sub_community_id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>user_Dwellings)
    user_dwelling_id:number;

    @JoinTable({name:"product_sku_id"})
    @ManyToMany(type=>product_Skues)
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