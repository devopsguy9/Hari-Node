import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class supplier_user_dwelling_mapper {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_dwelling_id: number;

    @Column()
    community_id: number;

    @Column()
    dwelling_id: number;


    @Column()
    sub_community_id: number;

   
}