import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class sub_community {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    community_id: number;

    @Column()
    active: string;

   
}