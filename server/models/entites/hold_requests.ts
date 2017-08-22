import { suppliers } from './suppliers';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {user_dwellings} from './user_dwellings';

@Entity("hold_requests")
export class hold_requests{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>user_dwellings)
    user_dwelling_id:number;

    @Column({name:"raised_on"})
    raised_on:Date;

    @Column({name:"start_date"})
    start_date:Date;

    @Column({name:"end_date"})
    end_date:Date;

    @JoinColumn({name:"supplier_id"})
    @OneToOne(type=>suppliers)
    supplier_id:number;


}