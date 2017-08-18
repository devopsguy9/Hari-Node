import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


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

   
}