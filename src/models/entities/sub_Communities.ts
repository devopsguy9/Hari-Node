import { JunctionInsert } from 'typeorm/persistence/Subject';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {communities} from './communities';
import {dwellings} from './dwellings';
import {delivery_Schedules} from './delivery_Schedules';

@Entity("sub_communities")
export class sub_Communities{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinTable({name:"community_id"})
    @ManyToMany(type=>communities)
    community_id:number;

    @Column({name:"active"})
    active:boolean;


}