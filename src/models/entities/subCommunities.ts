import { JunctionInsert } from 'typeorm/persistence/Subject';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {communities} from './communities';
import {Dwellings} from './dwellings';
import {DeliverySchedules} from './deliverySchedules';

// DSC - As discussed in out last meeting, the name of the entity should be singular, not plural
@Entity("sub_communities")
export class SubCommunities{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    // DSC - As discussed, this needs to be typed to a Community entity, not the id
    @JoinTable({name:"community_id"})
    @ManyToMany(type=>communities)
    community_id:number;
    // DSC the above line has to be community: Community

    @Column({name:"active"})
    active:boolean;


}
