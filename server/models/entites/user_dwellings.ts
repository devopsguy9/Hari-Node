import { supplier_user_dwelling_mappers } from './supplier_user_dwelling_mappers';
import { delivery_schedules } from './delivery_schedules';
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
import {regular_consumptions} from './regular_consumptions';

@Entity("user_dwellings")
export class user_dwellings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_id"})
    @OneToOne(type=>users)
    user_id:number;

    @Column({name:"dwelling_id"})
    @ManyToMany(type=>dwellings)
    dwelling_id:number;

    @Column({name:"effective"})
    effective:boolean;

    @JoinColumn({name:"regular_consumptions_id"})
    @ManyToOne(type=>regular_consumptions)
    regular_consumptions_id:number;

    @JoinColumn({name:"supplier_user_dwelling_mappers"})
    @ManyToMany(type=>supplier_user_dwelling_mappers)
    supplier_user_dwelling_mappers:number;

}