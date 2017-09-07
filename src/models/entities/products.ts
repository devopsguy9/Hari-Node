import { Manufacturer } from './manufacturers';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn} from 'typeorm';
import {ProductSku} from './productSkus'

@Entity("products")
export class Product{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"description",
        length:255
    })
    description:string;

    @JoinColumn({name:"manufacturer"})
    @ManyToOne(type=>Manufacturer)
    manufacturers:Manufacturer;

    @Column({name:"product_category_id"})
    product_category_id:number;

    @Column({name:"active"})
    active:boolean;

    @Column({name:"supplier_id"})
    supplier_id:number;

//OneToMany(type=>ProductSku,product_skus=>product_skus.products_id,{
   //     cascadeInsert:true,
  //      cascadeUpdate:true
  //  })
  //  product_skus:ProductSku[];

}