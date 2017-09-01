import { users } from './users';
import { suppliers } from './suppliers';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {user_Dwellings} from './user_Dwellings';

@Entity("hold_requests")
export class hold_Requests{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>user_Dwellings)
    user_dwelling_id:number;

    @Column({name:"raised_on"})
    raised_on:Date;

    @Column({name:"start_date"})
    start_date:Date;

    @Column({name:"end_date"})
    end_date:Date;

    @JoinColumn({name:"users_id"})
    @ManyToOne(type=>users)
    users_id:number;

    @JoinColumn({name:"supplier_id"})
    @OneToOne(type=>suppliers)
    supplier_id:number;


}