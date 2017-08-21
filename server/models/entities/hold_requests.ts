import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne ,JoinColumn} from "typeorm";
import {user_dwellings} from './user_dwellings';
import {regular_consumptions} from './regular_consumptions';

@Entity()
export class hold_requests {

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

    @OneToOne(type=>regular_consumptions,regular_consumptions=>regular_consumptions.hold_requests,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    regular_consumption_id: regular_consumptions;

    @ManyToOne(type=>user_dwellings,user_dwelling=>user_dwelling.hold_request,{
        cascadeInsert:true
    })
    user_dwelling:user_dwellings

   
}