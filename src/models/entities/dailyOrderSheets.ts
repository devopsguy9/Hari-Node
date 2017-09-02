import { Suppliers } from './suppliers';
import { ProductSkues } from './productSkues';
import { Manufacturers } from './manufacturers';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("daily_order_sheets")
export class DailyOrderSheets{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"manufacture_id"})
    @ManyToOne(type=>Manufacturers)
    manufacture_id:number;

    @JoinTable({name:"product_skues_id"})
    @ManyToMany(type=>ProductSkues)
    product_skues_id:number;

    @Column({name:"order_date"})
    order_date:Date;

    @Column({name:"quantity"})
    quantity:number;

    @JoinColumn({name:"supplier_id"})
    @ManyToOne(type=>Suppliers)
    supplier_id:number;

}