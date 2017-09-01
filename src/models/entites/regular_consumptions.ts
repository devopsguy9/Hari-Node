import { hold_requests } from './hold_requests';
import { product_skues } from './product_skues';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity("regular_consumptions")
export class regular_consumptions{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"user_dwelling_id"})
    user_dwelling_id:number;

    @JoinColumn({name:"product_sku_id"})
    @ManyToMany(type=>product_skues)
    product_sku_id:number;

    @Column({name:"quantity"})
    quantity:number;

    @Column({name:"suppiler_id"})
    supplier_id:number;
}