import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_sku_attribute {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_sku_id: string;

    @Column()
    product_attribute_id: string;

    @Column({
        length: 80
    })
    attribute_value: string;

   
}