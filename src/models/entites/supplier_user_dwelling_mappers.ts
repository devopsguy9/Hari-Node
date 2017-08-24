import { suppliers } from './suppliers';
import { user_dwellings } from './user_dwellings';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn,JoinColumn} from 'typeorm';


@Entity("supplier_user_dwelling_mappers")
export class supplier_user_dwelling_mappers{

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToMany(type=>user_dwellings)
    user_dwelling_id:number;

    @JoinColumn({name:"supplier_id"})
    @ManyToMany(type=>suppliers)
    supplier_id:number;
}