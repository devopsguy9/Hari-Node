import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class user_billing {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    billed_date: number;

    @Column()
    user_dwelling: number;

    @Column()
    product_sku_id: number;

    @Column()
    day_price: number;

    @Column()
    total_price: number;

    @Column()
    hold_request_id: number;

    @Column()
    special_request_id: number;

    @Column()
    supplier_id: number;

   
}