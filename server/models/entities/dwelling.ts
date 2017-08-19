import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {sub_community} from './sub_community';

@Entity()
export class dwelling {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 128
    })
    name: string;

    @Column()
    sub_community_id: number;

    @Column()
    active: number;
   
    @ManyToOne(type=>sub_community,subcommunity=>subcommunity.dwelling,{
        cascadeInsert:true
    })
    subcommunity:sub_community;

   
}