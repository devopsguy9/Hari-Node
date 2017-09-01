import { special_requests } from './special_requests';
import { product_skues } from './product_skues';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn ,JoinColumn} from 'typeorm';


@Entity("special_request_details")
export class special_request_details{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"special_request_id"})
    @ManyToOne(type=>special_requests)
    special_request_id:number;

    @JoinColumn({name:"product_sku_id"})
    @ManyToMany(type=>product_skues)
    product_sku_id:number;

    @Column({name:"quantity"})
    quantity:number;

}