import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany ,JoinColumn} from "typeorm";
import {product_sku_attributes} from './product_sku_attributes';

@Entity()
export class product_attributes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 128
    })
    name: string;

    @Column({
        length: 255
    })
    description: string;

    @Column({
        length: 80
    })
    data_type: string;

    @Column()
    active: boolean;

    @OneToMany(type=>product_sku_attributes,product_sku_attributes=>product_sku_attributes.product_attribute_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku_attributes:product_sku_attributes;
   
}