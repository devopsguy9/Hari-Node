import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_sku_price {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_sku_id: number;

    @Column()
    price: number;

    @Column()
    effective: number;

   
}