import { Manufacturers } from './manufacturers';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne,JoinColumn} from 'typeorm';


@Entity("products")
export class Products{
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

    @JoinColumn({name:"manufacturers_id"})
    @ManyToOne(type=>Manufacturers)
    manufacturers_id:number;

    @Column({name:"product_category_id"})
    product_category_id:number;

    @Column({name:"active"})
    active:boolean;

    @Column({name:"supplier_id"})
    supplier_id:number;

}