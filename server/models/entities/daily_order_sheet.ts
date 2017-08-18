import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class daily_order_sheet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    manufacture_id: number;

    @Column()
    product_sku__id: number;
    
    @Column()
    order_date: string;

    @Column()
    quantity: number;

    @Column()
    suplier_id: number;
   
}