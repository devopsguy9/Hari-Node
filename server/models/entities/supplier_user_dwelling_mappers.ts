import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,ManyToMany ,JoinColumn} from "typeorm";
import {user_dwellings} from './user_dwellings';

@Entity()
export class supplier_user_dwelling_mappers {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type=>user_dwellings,user_dwelling_id=>user_dwelling_id.supplier_user_dwelling_mappers,{
        cascadeInsert:true,
        cascadeUpdate:true
        })
        user_dwelling_id:user_dwellings


    @Column()
    supplier_id: number;
   
}