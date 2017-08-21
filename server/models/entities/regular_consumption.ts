import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {user_dwelling} from './user_dwelling';

@Entity()
export class regular_consumption {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_dwelling_id: number;

    @Column()
    product_sku__id: number;
    
    @Column()
    quantity: number;

    @Column()
    supplier_id: number;

    @ManyToOne(type=>user_dwelling,user_dwelling=>user_dwelling.regular_consumption,{
        cascadeInsert:true
    })
    user_dwelling:user_dwelling
   
}