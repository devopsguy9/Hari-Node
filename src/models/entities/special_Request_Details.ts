import { special_Requests } from './special_Requests';
import { product_Skues } from './product_Skues';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("special_request_details")
export class special_Request_Details{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"special_request_id"})
    @ManyToOne(type=>special_Requests)
    special_request_id:number;

    @JoinTable({name:"product_sku_id"})
    @ManyToMany(type=>product_Skues)
    product_sku_id:number;

    @Column({name:"quantity"})
    quantity:number;

}