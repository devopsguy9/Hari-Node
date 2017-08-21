import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany ,JoinColumn} from "typeorm";
import {user_dwellings} from './user_dwellings';

@Entity()
export class users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @Column({
        length: 128
    })
    email: string;

    @Column()
    phone: number;

    @Column({
        length: 128
    })
    password: string;

    @Column({
        length: 128
    })
    salt: string;
   
    @OneToMany(type=>user_dwellings,user_id=>user_id.user_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    user_id:user_dwellings
   
}