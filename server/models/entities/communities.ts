import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import {sub_communities} from './sub_communities';

@Entity()
export class communities {

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

    @OneToMany(type=>sub_communities,sub_communities=>sub_communities.communities,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    sub_communities:sub_communities[];

   
}