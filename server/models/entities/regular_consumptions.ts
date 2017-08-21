import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany,OneToOne ,JoinColumn} from "typeorm";
import {user_dwellings} from './user_dwellings';
import {product_skues} from './product_skues';
import {hold_requests} from './hold_requests';

@Entity()
export class regular_consumptions {

    @PrimaryGeneratedColumn()
    id: number;


    @ManyToMany(type=>product_skues,product_sku__id=>product_sku__id.regular_consumptions,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku__id: product_skues;

    @OneToOne(type=>hold_requests,hold_requests=>hold_requests.regular_consumption_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    hold_requests: hold_requests;
    
    @Column()
    quantity: number;

    @Column()
    supplier_id: number;

    @ManyToOne(type=>user_dwellings,user_dwellings=>user_dwellings.regular_consumption,{
        cascadeInsert:true
    })
    user_dwellings:user_dwellings
   
}