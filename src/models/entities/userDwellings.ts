import { SupplierUserDwellingMappers } from './supplierUserDwellingMappers';
import { DeliverySchedules } from './deliverySchedules';
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
import {Users} from './users';
import {Dwellings} from './dwellings';
import {RegularConsumptions} from './regularConsumptions';

@Entity("user_dwellings")
export class UserDwellings{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_id"})
    @OneToOne(type=>Users)
    user_id:number;

    @JoinTable({name:"dwelling_id"})
    @ManyToMany(type=>Dwellings)
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