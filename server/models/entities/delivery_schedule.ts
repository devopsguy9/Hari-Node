import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class delivery_schedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sub_community_id: number;
    
    @Column()
    user_dwelling_id: number;

    @Column()
    product_sku_id: number;

    @Column()
    quantity: number;

    @Column()
    user_billing_id: number;

    @Column()
    supplier_id: number;

    @Column()
    delivery_date: number;

    @Column()
    community_id: number;

   
}