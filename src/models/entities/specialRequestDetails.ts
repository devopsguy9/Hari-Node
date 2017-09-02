import { SpecialRequests } from './specialRequests';
import { ProductSkues } from './productSkues';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("special_request_details")
export class SpecialRequestDetails{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"special_request_id"})
    @ManyToOne(type=>SpecialRequests)
    special_request_id:number;

    @JoinTable({name:"product_sku_id"})
    @ManyToMany(type=>ProductSkues)
    product_sku_id:number;

    @Column({name:"quantity"})
    quantity:number;

}