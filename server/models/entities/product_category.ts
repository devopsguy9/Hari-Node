import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    consumable_product_id: number;

    @Column({
        length:128
    })
    name: string;
    
    @Column()
    active: boolean;
   
}