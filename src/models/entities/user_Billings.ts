import { suppliers } from './suppliers';
import { special_Requests } from './special_Requests';
import { hold_Requests } from './hold_Requests';
import { product_Skues } from './product_Skues';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';
import {user_Dwellings} from './user_Dwellings';


@Entity("user_billings")
export class user_Billings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"billing_date"})
    billed_date:Date;

    @JoinColumn({name:"suppliers_id"})
    @ManyToOne(type=>suppliers)
    suppliers_id:number;

    // @JoinColumn({name:"product_skues_id"})
    // @OneToMany(type=>product_skues,product_skues=>product_skues)
    // product_skues_id:Date;

    @Column({name:"day_price"})
    day_price:number;

    @JoinColumn({name:"total_price"})
    @ManyToOne(type=>suppliers)
    total_price:number;

    @JoinColumn({name:"user_dwellings_id"})
    @ManyToOne(type=>user_Dwellings)
    user_dwelling_id:number;

    @JoinColumn({name:"hold_requests_id"})
    @OneToOne(type=>hold_Requests)
    hold_requests_id:number;

    @JoinColumn({name:"special_requests_id"})
    @OneToOne(type=>special_Requests)
    special_requests_id:number;

}