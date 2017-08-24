import { JunctionInsert } from 'typeorm/persistence/Subject';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {communities} from './communities';
import {dwellings} from './dwellings';
import {delivery_schedules} from './delivery_schedules';

@Entity("sub_communities")
export class sub_communities{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinColumn({name:"community_id"})
    @ManyToMany(type=>communities)
    community_id:number;

    @Column({name:"active"})
    active:boolean;


}