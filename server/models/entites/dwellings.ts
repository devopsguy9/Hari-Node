import {Entity,Column,PrimaryGeneratedColumn,JoinTable,OneToMany,ManyToOne,ManyToMany,JoinColumn} from 'typeorm';
import {sub_communities} from './sub_communities';
import {user_dwellings} from './user_dwellings';


@Entity("dwellings")
export class dwellings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinColumn({name:"sub_community_id"})
    @ManyToOne(type=>sub_communities)
    sub_community_id:number;

    @Column({name:"active"})
    active:boolean;

}