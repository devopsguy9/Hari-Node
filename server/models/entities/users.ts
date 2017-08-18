import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


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

   
}