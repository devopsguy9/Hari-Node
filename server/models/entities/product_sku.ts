import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_sku {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_id: number;

    @Column()
    active: number;

    @Column()
    name: number;

   
}