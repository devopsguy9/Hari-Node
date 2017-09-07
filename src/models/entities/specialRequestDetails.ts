import { SpecialRequest } from './specialRequests';
import { ProductSku } from './productSkus';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("special_request_details")
export class SpecialRequestDetail{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"special_request"})
    @ManyToOne(type=>SpecialRequest)
    special_requests:SpecialRequest;

    @JoinTable({name:"product_skus"})
    @ManyToMany(type=>ProductSku)
    product_skus:ProductSku;

    @Column({name:"quantity"})
    quantity:number;

}