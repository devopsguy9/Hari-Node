import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class special_request_details {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    special_request_id: number;

    @Column()
    product_sku_id: number;

    @Column()
    quantity: number;

   
}