import { Suppliers } from './suppliers';
import { SpecialRequests } from './specialRequests';
import { HoldRequests } from './holdRequests';
import { ProductSkues } from './productSkues';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';
import {UserDwellings} from './userDwellings';


@Entity("user_billings")
export class UserBillings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"billing_date"})
    billed_date:Date;

    @JoinColumn({name:"suppliers_id"})
    @ManyToOne(type=>Suppliers)
    suppliers_id:number;

    // @JoinColumn({name:"product_skues_id"})
    // @OneToMany(type=>product_skues,product_skues=>product_skues)
    // product_skues_id:Date;

    @Column({name:"day_price"})
    day_price:number;

    @JoinColumn({name:"total_price"})
    @ManyToOne(type=>Suppliers)
    total_price:number;

    @JoinColumn({name:"user_dwellings_id"})
    @ManyToOne(type=>UserDwellings)
    user_dwelling_id:number;

    @JoinColumn({name:"hold_requests_id"})
    @OneToOne(type=>HoldRequests)
    hold_requests_id:number;

    @JoinColumn({name:"special_requests_id"})
    @OneToOne(type=>SpecialRequests)
    special_requests_id:number;

}