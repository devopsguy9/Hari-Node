import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class product_attribute {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 128
    })
    name: string;

    @Column({
        length: 255
    })
    description: string;

    @Column({
        length: 80
    })
    data_type: string;

    @Column()
    active: boolean;

   
}