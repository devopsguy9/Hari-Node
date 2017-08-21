import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany,OneToOne ,JoinColumn} from "typeorm";
import {product_attributes} from './product_attributes';
import {product_skues} from './product_skues';

@Entity()
export class product_sku_attributes {

    @PrimaryGeneratedColumn()
    id: number;

   
    @OneToOne(type=>product_skues,product_sku_id=>product_sku_id.product_sku_attributes,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku_id:product_skues;

  
    @ManyToOne(type=>product_attributes,product_attribute_id=>product_attribute_id.product_sku_attributes,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_attribute_id:product_attributes;

    @Column({
        length: 80
    })
    attribute_value: string;

   
}