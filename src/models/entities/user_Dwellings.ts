import { supplier_User_Dwelling_Mappers } from './supplier_User_Dwelling_Mappers';
import { delivery_Schedules } from './delivery_Schedules';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {users} from './users';
import {dwellings} from './dwellings';
import {regular_Consumptions} from './regular_Consumptions';

@Entity("user_dwellings")
export class user_Dwellings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_id"})
    @OneToOne(type=>users)
    user_id:number;

    @JoinTable({name:"dwelling_id"})
    @ManyToMany(type=>dwellings)
    dwelling_id:number;

    @Column({name:"effective"})
    effective:boolean;

    // @JoinColumn({name:"regular_consumptions_id"})
    // @ManyToOne(type=>regular_consumptions)
    // regular_consumptions_id:number;

    // @JoinColumn({name:"supplier_user_dwelling_mappers"})
    // @ManyToMany(type=>supplier_user_dwelling_mappers)
    // supplier_user_dwelling_mappers:number;

}