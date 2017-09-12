import { ProductSku } from './productSku';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("regular_consumptions")
export class RegularConsumption{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"user_dwelling_id"})
    user_dwelling_id:number;

    // @JoinTable({name:"product_skus"})
    // @ManyToMany(type=>ProductSku)
    // product_skus:ProductSku;

    @Column({name:"quantity"})
    quantity:number;

    @Column({name:"suppiler_id"})
    supplier_id:number;
}