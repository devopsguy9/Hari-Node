import { Suppliers } from './suppliers';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {UserDwellings} from './userDwellings';

@Entity("special_Requests")
export class SpecialRequests{
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

    @Column({name:"override"})
    override:boolean;

    @JoinTable({name:"supplier_id"})
    @ManyToMany(type=>Suppliers)
    supplier_id:number;

}