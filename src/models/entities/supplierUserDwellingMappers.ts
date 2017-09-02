import { Suppliers } from './suppliers';
import { UserDwellings } from './userDwellings';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';


@Entity("supplier_user_dwelling_mappers")
export class SupplierUserDwellingMappers{

    @JoinTable({name:"user_dwelling_id"})
    @ManyToMany(type=>UserDwellings)
    user_dwelling_id:number;

    @JoinTable({name:"supplier_id"})
    @PrimaryColumn({name:"supplier_id"})
    @ManyToMany(type=>Suppliers)
    supplier_id:number;
}