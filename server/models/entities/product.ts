import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255
    })
    name: string;

    @Column({
        length: 500
    })
    description: string;


    @Column()
    manufacture_id:number;

    @Column()
    product_category_id:number;

    @Column()
    active: boolean;

    @Column()
    supplier_id: number;

   
}