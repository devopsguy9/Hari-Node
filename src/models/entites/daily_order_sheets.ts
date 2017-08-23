import { suppliers } from './suppliers';
import { product_skues } from './product_skues';
import { manufacturers } from './manufacturers';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("daily_order_sheets")
export class daily_order_sheets{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"manufacture_id"})
    @ManyToOne(type=>manufacturers)
    manufacture_id:number;

    @JoinColumn({name:"product_skues_id"})
    @ManyToMany(type=>product_skues)
    product_skues_id:number;

    @Column({name:"order_date"})
    order_date:Date;

    @Column({name:"quantity"})
    quantity:number;

    @JoinColumn({name:"supplier_id"})
    @ManyToOne(type=>suppliers)
    supplier_id:number;

}