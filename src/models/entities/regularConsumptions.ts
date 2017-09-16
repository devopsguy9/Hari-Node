import { UserDwelling } from './userDwellings';
import { ProductSku } from './productSku';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn,OneToMany,ManyToOne } from 'typeorm';


@Entity("regular_consumptions")
export class RegularConsumption{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @JoinColumn({name:"user_dwelling_id"})
    @ManyToOne(type=>UserDwelling)
    user_dwelling_id:UserDwelling[];

    // @JoinTable({name:"user"})
    // @ManyToMany(type=>ProductSku)
    // product_skus:ProductSku;

    @Column({name:"quantity"})
    quantity:number;

    @Column({name:"suppiler_id"})
    supplier_id:number;
}