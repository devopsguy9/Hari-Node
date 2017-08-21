import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne,ManyToMany ,JoinColumn} from "typeorm";
import {products} from './products';
import {product_sku_prices} from './product_sku_prices';
import {product_sku_attributes} from './product_sku_attributes';
import {regular_consumptions} from './regular_consumptions';
import {daily_order_sheets} from './daily_order_sheets';
import {delivery_schedules} from './delivery_schedules';
import {special_request_details} from './special_request_details';
import {user_billings} from './user_billings';

@Entity()
export class product_skues {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type=>products,products=>products.product_skues,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_id: products;

    @ManyToOne(type=>user_billings,user_billings=>user_billings.product_sku_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    user_billings: user_billings;

    @ManyToMany(type=>regular_consumptions,regular_consumptions=>regular_consumptions.product_sku__id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    regular_consumptions: regular_consumptions;

    @ManyToMany(type=>delivery_schedules,delivery_schedules=>delivery_schedules.product_sku__id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    delivery_schedules: delivery_schedules;

    @ManyToMany(type=>special_request_details,special_request_details=>special_request_details.product_sku__id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    special_request_details: special_request_details;

    
    @ManyToMany(type=>daily_order_sheets,daily_order_sheets=>daily_order_sheets.product_sku__id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    daily_order_sheets: daily_order_sheets;

    @OneToOne(type=>product_sku_prices,product_sku_prices=>product_sku_prices.product_sku_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku_prices: product_sku_prices;

    @OneToOne(type=>product_sku_attributes,product_sku_attributes=>product_sku_attributes.product_sku_id,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    product_sku_attributes: product_sku_attributes;

    @Column()
    active: boolean;

    @Column({
        length: 255
    })
    name: string;

   
}