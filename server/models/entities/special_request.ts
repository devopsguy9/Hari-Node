import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class special_request {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_dwelling_id: number;

    @Column()
    raised_on: number;

    @Column()
    start_date: number;

    @Column()
    end_date: number;

    @Column()
    supplier_id: number;

   
}