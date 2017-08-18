import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class special_request {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_dwelling_id: number;

    @Column()
    raised_on: Date;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    supplier_id: number;

   
}