import { SpecialRequestDetail } from './specialRequestDetails';
import { Supplier } from './suppliers';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {UserDwelling} from './userDwellings';

@Entity("special_request")
export class SpecialRequest{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling"})
    @ManyToOne(type=>UserDwelling)
    user_dwellings:UserDwelling;

    @Column({name:"raised_on"})
    raised_on:Date;

    @Column({name:"start_date"})
    start_date:Date;

    @Column({name:"end_date"})
    end_date:Date;

    @Column({name:"override"})
    override:boolean;

    // @JoinTable({name:"supplier"})
    // @ManyToMany(type=>Supplier)
    // suppliers:Supplier;

    @OneToMany(type=>SpecialRequestDetail,special_request_details=>special_request_details.special_requests)
    special_request_details:SpecialRequestDetail[];

}