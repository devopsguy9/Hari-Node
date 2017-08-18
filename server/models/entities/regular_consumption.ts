import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


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
   
}