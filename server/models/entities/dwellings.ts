import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {sub_communities} from './sub_communities';
import {user_dwellings} from './user_dwellings';

@Entity()
export class dwellings {

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
   
    @ManyToOne(type=>sub_communities,subcommunity=>subcommunity.dwelling,{
        cascadeInsert:true
    })
    subcommunity:sub_communities;

    @ManyToMany(type=>user_dwellings,user_dwelling=>user_dwelling.dwelling_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
   user_dwelling:user_dwellings; 
   
}