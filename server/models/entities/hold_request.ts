import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {user_dwelling} from './user_dwelling';


@Entity()
export class hold_request {

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

    @ManyToOne(type=>user_dwelling,user_dwelling=>user_dwelling.hold_request,{
        cascadeInsert:true
    })
    user_dwelling:user_dwelling

   
}