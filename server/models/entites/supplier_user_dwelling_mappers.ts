import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';


@Entity("supplier_user_dwelling_mappers")
export class supplier_user_dwelling_mappers{

    @Column({name:"user_dwelling_id"})
    user_dwelling_id:number;

    @Column({name:"supplier_id"})
    supplier_id:number;
}