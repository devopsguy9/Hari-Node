import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    consumable_product_id: number;

    @Column()
    name: string;
    
    @Column()
    active: string;
   
}