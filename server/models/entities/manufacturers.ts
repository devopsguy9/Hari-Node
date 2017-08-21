import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany , JoinColumn} from "typeorm";
import {products} from './products';
import {daily_order_sheets} from './daily_order_sheets';

@Entity()
export class manufacturers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 128
    })
    name: string;

    @Column()
    active: boolean;

    @Column({
        length: 255
    })
    comments: string;


    @OneToMany(type=>products,products=>products.manufacture_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    products:products;

    @OneToMany(type=>daily_order_sheets,daily_order_sheets=>daily_order_sheets.manufacture_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    daily_order_sheets:daily_order_sheets;
   
}