import { suppliers } from './suppliers';
import { user_Dwellings } from './user_Dwellings';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';


@Entity("supplier_user_dwelling_mappers")
export class supplier_User_Dwelling_Mappers{

    @JoinTable({name:"user_dwelling_id"})
    @ManyToMany(type=>user_Dwellings)
    user_dwelling_id:number;

    @JoinTable({name:"supplier_id"})
    @PrimaryColumn({name:"supplier_id"})
    @ManyToMany(type=>suppliers)
    supplier_id:number;
}