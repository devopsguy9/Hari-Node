import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {sub_community} from './sub_community';
import {user_dwelling} from './user_dwelling';

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

    @ManyToMany(type=>user_dwelling,user_dwelling=>user_dwelling.dwelling_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
   user_dwelling:user_dwelling; 
   
}