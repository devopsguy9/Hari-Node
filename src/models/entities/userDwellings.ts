import { UserBilling } from './userBillings';
import { SpecialRequest } from './specialRequests';
import { HoldRequest } from './holdRequests';
//import { SupplierUserDwellingMapper } from './supplierUserDwellingMappers';
import { DeliverySchedule } from './deliverySchedules';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {User} from './users';
import {Dwelling} from './dwellings';
import {RegularConsumption} from './regularConsumptions';

@Entity("user_dwelling")
export class UserDwelling{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user"})
    @ManyToOne(type=>User)
    users:User;

    @JoinTable({name:"dwelling"})
    @ManyToMany(type=>Dwelling)
    dwellings:Dwelling;

    @Column({name:"effective"})
    effective:Date;

    @OneToMany(type=>DeliverySchedule,delivery_schedules=>delivery_schedules.user_dwellings,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    deliveryschedules:DeliverySchedule[];

    @OneToMany(type=>HoldRequest,hold_requests=>hold_requests.user_dwellings,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    holdrequests:HoldRequest[];

    @OneToMany(type=>SpecialRequest,special_request=>special_request.user_dwellings,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    specialrequests:SpecialRequest[];

    @OneToMany(type=>UserBilling,user_billings=>user_billings.user_dwellings,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    userbillings:UserBilling[];

    // @JoinColumn({name:"regular_consumptions_id"})
    // @ManyToOne(type=>regular_consumptions)
    // regular_consumptions_id:number;

    // @JoinColumn({name:"supplier_user_dwelling_mappers"})
    // @ManyToMany(type=>supplier_user_dwelling_mappers)
    // supplier_user_dwelling_mappers:number;

}