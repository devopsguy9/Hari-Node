import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {user_dwellings} from './user_dwellings';

@Entity()
export class special_requests {

    @PrimaryGeneratedColumn()
    id: number;

   

    @Column()
    raised_on: Date;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    supplier_id: number;

    @ManyToOne(type=>user_dwellings,user_dwelling_id=>user_dwelling_id.user_billing,{
        cascadeInsert:true
    })
    user_dwelling_id:user_dwellings

   
}