import {Entity,Column,PrimaryGeneratedColumn,JoinTable,OneToMany,ManyToOne,ManyToMany,JoinColumn} from 'typeorm';
import {SubCommunities} from './subCommunities';
import {UserDwellings} from './userDwellings';


@Entity("dwellings")
export class Dwellings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @JoinColumn({name:"sub_community_id"})
    @ManyToOne(type=>SubCommunities)
    sub_community_id:number;

    @Column({name:"active"})
    active:boolean;

}