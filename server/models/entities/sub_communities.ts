import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany ,JoinColumn} from "typeorm";
import {communities} from './communities';
import {dwellings} from './dwellings';
import {delivery_schedules} from './delivery_schedules';


@Entity()
export class sub_communities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @Column()
    community_id: number;

    @Column()
    active: boolean;

    @ManyToOne(type=>communities,communities=>communities.sub_communities,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    communities:communities;

    @OneToMany(type=>dwellings,dwelling=>dwelling.sub_community_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
     
    dwelling: dwellings;

    @OneToMany(type=>delivery_schedules,deliveryschedule=>deliveryschedule.sub_community_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    deliveryschedule:delivery_schedules;

   
}