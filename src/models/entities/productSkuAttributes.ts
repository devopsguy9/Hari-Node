import { ProductAttribute } from './productAttributes';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity("product_sku_attributes")
export class ProductSkuAttribute{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"product_sku_id"})
    product_sku_id:number;

    @JoinColumn({name:"product_attribute"})
    @OneToOne(type=>ProductAttribute)
    product_attributes:ProductAttribute;

    @Column({
        name:"attribute_value",
        length:45
    })
    attribute_value:string;

}