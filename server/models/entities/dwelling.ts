import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class dwelling {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    sub_community_id: number;

    @Column()
    active: number;

   
}