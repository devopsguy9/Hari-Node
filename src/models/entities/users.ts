import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn} from 'typeorm';
import {user_Dwellings} from './user_Dwellings';

@Entity("users")
export class users{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"email",
        length:100
    })
    email:string;

    @Column({
        name:"phone",
        length:20
    })
    phone:string;

    @Column({
        name:"password",
        length:100
    })
    password:string;

    @Column({
        name:"salt",
        length:100
    })
    salt:string;

}