import { product_Skues } from './product_Skues';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("regular_consumptions")
export class regular_Consumptions{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"user_dwelling_id"})
    user_dwelling_id:number;

    @JoinTable({name:"product_sku_id"})
    @ManyToMany(type=>product_Skues)
    product_sku_id:number;

    @Column({name:"quantity"})
    quantity:number;

    @Column({name:"suppiler_id"})
    supplier_id:number;
}