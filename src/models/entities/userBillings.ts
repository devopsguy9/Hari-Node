import { Supplier } from './suppliers';
import { SpecialRequest } from './specialRequests';
import { HoldRequest } from './holdRequests';
import { ProductSku } from './productSkus';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn,OneToOne} from 'typeorm';
import {UserDwelling} from './userDwellings';


@Entity("user_billings")
export class UserBilling{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"billing_date"})
    billed_date:Date;

    @JoinColumn({name:"suppliers"})
    @ManyToOne(type=>Supplier)
    suppliers:Supplier;

     @JoinColumn({name:"product_skues_id"})
     @OneToMany(type=>ProductSku,product_skus=>product_skus.user_billings)
     product_skus:ProductSku[];

    @Column({name:"day_price"})
    day_price:number;

    @JoinColumn({name:"total_price"})
    @ManyToOne(type=>Supplier)
    total_price:Supplier;

    @JoinColumn({name:"user_dwelling"})
    @ManyToOne(type=>UserDwelling)
    user_dwellings:UserDwelling;

    @JoinColumn({name:"hold_request"})
    @OneToOne(type=>HoldRequest)
    hold_requests:HoldRequest;

    @JoinColumn({name:"special_request"})
    @OneToOne(type=>SpecialRequest)
    special_requests:SpecialRequest;

}