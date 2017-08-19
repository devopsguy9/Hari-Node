import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany ,JoinColumn} from "typeorm";
import {community} from './community';
import {dwelling} from './dwelling';
import {delivery_schedule} from './delivery_schedule';


@Entity()
export class sub_community {

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

    @ManyToOne(type=>community,community=>community.sub_community,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    community:community;

    @OneToMany(type=>dwelling,dwelling=>dwelling.sub_community_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
     
    dwelling: dwelling;

    @OneToMany(type=>delivery_schedule,deliveryschedule=>deliveryschedule.sub_community_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    deliveryschedule:delivery_schedule;

   
}