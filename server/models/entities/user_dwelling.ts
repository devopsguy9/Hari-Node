import {Entity, Column, PrimaryGeneratedColumn, OneToMany ,ManyToMany, JoinColumn} from "typeorm";
import {dwelling} from './dwelling';
import {regular_consumption} from './regular_consumption';
import {delivery_schedule} from './delivery_schedule';
import {hold_request} from './hold_request';
import {user_billing} from './user_billing';

@Entity()
export class user_dwelling {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    dwelling_id: number;


    @Column()
    effective: Date;

    @ManyToMany(type=>dwelling,dwelling=>dwelling.user_dwelling,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
   dwelling:dwelling;
   
   @OneToMany(type=>regular_consumption,regular_consumption=>regular_consumption.user_dwelling_id,{
    cascadeInsert:true,
    cascadeUpdate:true
    })
    regular_consumption:regular_consumption

    @OneToMany(type=>delivery_schedule,delivery_schedule=>delivery_schedule.user_dwelling_id,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
    delivery_schedule:delivery_schedule

    @OneToMany(type=>hold_request,hold_request=>hold_request.user_dwelling_id,{
            cascadeInsert:true,
            cascadeUpdate:true
            })
     hold_request:hold_request

     @OneToMany(type=>user_billing,user_billing=>user_billing.user_dwelling,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
    user_billing:user_billing
}