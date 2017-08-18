import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_attribute {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    description: string;

    @Column()
    data_type: string;

    @Column()
    active: number;

   
}