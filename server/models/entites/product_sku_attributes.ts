import { product_attributes } from './product_attributes';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity("product_sku_attributes")
export class product_sku_attributes{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"product_sku_id"})
    product_sku_id:number;

    @JoinColumn({name:"product_attribute_id"})
    @OneToOne(type=>product_attributes)
    product_attribute_id:number;

    @Column({
        name:"attribute_value",
        length:45
    })
    attribute_value:string;

}