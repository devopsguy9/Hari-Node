import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    password: string;

    @Column()
    salt: string;

   
}