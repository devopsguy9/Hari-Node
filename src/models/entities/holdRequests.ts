import { Users } from './users';
import { Suppliers } from './suppliers';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {UserDwellings} from './userDwellings';

@Entity("hold_requests")
export class HoldRequests{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>UserDwellings)
    user_dwelling_id:number;

    @Column({name:"raised_on"})
    raised_on:Date;

    @Column({name:"start_date"})
    start_date:Date;

    @Column({name:"end_date"})
    end_date:Date;

    @JoinColumn({name:"users_id"})
    @ManyToOne(type=>Users)
    users_id:number;

    @JoinColumn({name:"supplier_id"})
    @OneToOne(type=>Suppliers)
    supplier_id:number;


}