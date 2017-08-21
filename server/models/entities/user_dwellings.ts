import {Entity, Column, PrimaryGeneratedColumn, OneToMany ,ManyToMany, JoinColumn} from "typeorm";
import {dwellings} from './dwellings';
import {regular_consumptions} from './regular_consumptions';
import {delivery_schedules} from './delivery_schedules';
import {hold_requests} from './hold_requests';
import {user_billings} from './user_billings';
import {special_requests} from './special_requests';
import {supplier_user_dwelling_mappers} from './supplier_user_dwelling_mappers';

@Entity()
export class user_dwellings {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    dwelling_id: number;


    @Column()
    effective: Date;

    @ManyToMany(type=>dwellings,dwelling=>dwelling.user_dwelling,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
   dwelling:dwellings;
   
   @OneToMany(type=>regular_consumptions,regular_consumption=>regular_consumption.user_dwellings,{
    cascadeInsert:true,
    cascadeUpdate:true
    })
    regular_consumption:regular_consumptions;

    @OneToMany(type=>delivery_schedules,delivery_schedule=>delivery_schedule.user_dwelling_id,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
    delivery_schedule:delivery_schedules;

    @OneToMany(type=>hold_requests,hold_request=>hold_request.user_dwelling,{
            cascadeInsert:true,
            cascadeUpdate:true
            })
     hold_request:hold_requests;

     @OneToMany(type=>user_billings,user_billing=>user_billing.user_dwelling,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
    user_billing:user_billings;

    @OneToMany(type=>special_requests,special_requests=>special_requests.user_dwelling_id,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
    special_requests:special_requests;

    @ManyToMany(type=>supplier_user_dwelling_mappers,supplier_user_dwelling_mappers=>supplier_user_dwelling_mappers.user_dwelling_id,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
        supplier_user_dwelling_mappers:supplier_user_dwelling_mappers;
}