import { UserBilling } from './userBillings';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';
import {DailyOrderSheet} from './dailyOrderSheets';

@Entity("suppliers")
export class Supplier{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"mobile",
        length:20
    })
    mobile:string;

    @Column({
        name:"comments",
        length:255
    })
    comments:string;

    @Column({name:"active"})
    active:boolean;

    // @OneToMany(type=>DailyOrderSheet,daily_order_sheets=>
    // daily_order_sheets.suppliers,{
    //     cascadeInsert:true,
    //     cascadeUpdate:true
    // })
    // dailyordersheets:DailyOrderSheet[];

    @OneToMany(type=>UserBilling,user_billings=>user_billings.suppliers,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    userbilling:UserBilling[];


}