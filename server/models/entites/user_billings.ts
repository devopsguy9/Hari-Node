import { suppliers } from './suppliers';
import { special_requests } from './special_requests';
import { hold_requests } from './hold_requests';
import { product_skues } from './product_skues';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';
import {user_dwellings} from './user_dwellings';


@Entity("user_billings")
export class user_billings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"billing_date"})
    billed_date:Date;

    @Column({name:"raised_on"})
    raised_on:Date;

    @Column({name:"start_date"})
    start_date:Date;

    @Column({name:"end_date"})
    end_date:Date;

    @JoinColumn({name:"supplier_id"})
    @ManyToOne(type=>suppliers)
    supplier_id:number;

    @JoinColumn({name:"user_dwellings_id"})
    @ManyToOne(type=>user_dwellings)
    user_dwelling_id:number;

    @JoinColumn({name:"hold_requests_id"})
    @OneToOne(type=>hold_requests)
    hold_requests_id:number;

    @JoinColumn({name:"special_requests_id"})
    @OneToOne(type=>special_requests)
    special_requests_id:number;

}