import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import {sub_community} from './sub_community';

@Entity()
export class community {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 128
    })
    name: string;

    @Column({
        length: 255
    })
    address: string;

    @Column()
    active: boolean;

    @Column({
        length: 128
    })
    locality: string;

    @Column({
        length: 128
    })
    city: string;

    @Column({
        length: 128
    })
    state: string;

    @Column({
        length: 128
    })
    country: string;

    @Column()
    pincode: number;

    @OneToMany(type=>sub_community,sub_community=>sub_community.community_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    sub_community:sub_community[];

   
}