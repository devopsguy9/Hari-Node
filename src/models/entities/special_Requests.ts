import { suppliers } from './suppliers';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {user_Dwellings} from './user_Dwellings';

@Entity("special_Requests")
export class special_Requests{
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

    @Column({name:"override"})
    override:boolean;

    @JoinTable({name:"supplier_id"})
    @ManyToMany(type=>suppliers)
    supplier_id:number;

}