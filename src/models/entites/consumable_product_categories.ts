import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';


@Entity("consumable_product_categories")
export class consumable_product_categories{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({name:"active"})
    active:boolean;

}