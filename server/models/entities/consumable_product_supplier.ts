import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class consumable_product_supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    consumable_product_id: number;

    @Column()
    supplier_id: number;

   
}