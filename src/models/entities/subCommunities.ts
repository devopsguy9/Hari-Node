import { JunctionInsert } from 'typeorm/persistence/Subject';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {communities} from './communities';
import {Dwellings} from './dwellings';
import {DeliverySchedules} from './deliverySchedules';

@Entity("sub_communities")
export class SubCommunities{
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