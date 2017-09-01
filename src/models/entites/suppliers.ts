import {Entity,Column,PrimaryGeneratedColumn,OneToMany,ManyToOne} from 'typeorm';


@Entity("suppliers")
export class suppliers{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:"name",
        length:128
    })
    name:string;

    @Column({
        name:"mobile",
        length:20
    })
    mobile:string;

    @Column({
        name:"comments",
        length:255
    })
    comments:string;

    @Column({name:"active"})
    active:boolean;


}