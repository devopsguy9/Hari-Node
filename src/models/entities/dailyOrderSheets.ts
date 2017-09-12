import { Supplier } from './suppliers';
import { ProductSku } from './productSku';
import { Manufacturer } from './manufacturers';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("daily_order_sheets")
export class DailyOrderSheet{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"manufacturer"})
    @ManyToOne(type=>Manufacturer)
    manufacturers:Manufacturer;

    // @JoinTable({name:"product_sku"})
    // @ManyToMany(type=>ProductSku)
    // product_skus:ProductSku;

    @Column({name:"order_date"})
    order_date:Date;

    @Column({name:"quantity"})
    quantity:number;

    @JoinColumn({name:"supplier"})
    @ManyToOne(type=>Supplier)
    suppliers:Supplier;

}