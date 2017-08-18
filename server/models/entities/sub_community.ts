import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {community} from './community';


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
        cascadeInsert:true
    })
    community:community;

   
}