import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class consumable_product_categeory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    active: string;

 
}