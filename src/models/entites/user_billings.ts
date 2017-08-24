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
    @ManyToOne(type=>user_dwellings)
    user_dwelling_id:number;

    @JoinColumn({name:"hold_requests_id"})
    @OneToOne(type=>hold_requests)
    hold_requests_id:number;

    @JoinColumn({name:"special_requests_id"})
    @OneToOne(type=>special_requests)
    special_requests_id:number;

}