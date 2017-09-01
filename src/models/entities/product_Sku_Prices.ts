import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';


@Entity("product_sku_prices")
export class product_Sku_Prices{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"product_sku_id"})
    product_sku_id:number;

    @Column({name:"price"})
    price:number;

    @Column({name:"effective"})
    effective:boolean;

}