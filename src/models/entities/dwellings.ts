import {Entity,Column,PrimaryGeneratedColumn,JoinTable,OneToMany,ManyToOne,ManyToMany,JoinColumn} from 'typeorm';
import {sub_Communities} from './sub_Communities';
import {user_Dwellings} from './user_Dwellings';


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
    @ManyToOne(type=>sub_Communities)
    sub_community_id:number;

    @Column({name:"active"})
    active:boolean;

}