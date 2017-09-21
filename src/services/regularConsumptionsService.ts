import * as console from 'console';
import { App } from "./../utils/App";
import { RegularConsumption } from "./../models/entities/regularConsumptions";
import { RegularConsumptionsDAO } from "./../daos/regularConsumptionsDAO";
import {ProductSku} from './../models/entities/productSku';
import {ProductSkuesDAO} from './../daos/productSkuesDAO';

export class RegularConsumptionsService {
    private regular_ConsumptionsDao: RegularConsumptionsDAO;
    //pri regular_ConsumptionsService = new RegularConsumptionsService();

    constructor() {
        this.regular_ConsumptionsDao = new RegularConsumptionsDAO();

    }

    async entity(id: any) {
        try {
            let data: any = await this.regular_ConsumptionsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.regular_ConsumptionsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search1(item: ProductSku) {
        try {
            let name = item.name;
            let data: any = await this.regular_ConsumptionsDao.search1(name);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: RegularConsumption) {
        try {
            if (this.validate(item)) {
                let pro = item.product_skus;
                 let pro1 = new ProductSku();
                 //pro1.id = item.product_skus;
                 console.log(item.product_skus);
                 
                // console.log(pro1.id);
                let result = await this.regular_ConsumptionsDao.search1(item.product_skus);

                console.log(result);
                if(result.length>0){
                    let item1 = {
                        id:item.id,
                        user_dwelling_id:item.user_dwelling_id,
                        supplier_id:item.supplier_id,
                        quantity:item.quantity,
                        product_skus:result
                    }
                    let regular_ConsumptionsData: any = await this.regular_ConsumptionsDao.save(item1);
                    let returnData = {
                        id: item.id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                }
                // pro1.name = "High fat Milk";
                // pro1.active = true;
                // pro1.price = 25;
                
            } else {
                let returnData = {
                    message: "Please enter proper values."
                }
                return Promise.reject(returnData);
            }

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: RegularConsumption = (await this.regular_ConsumptionsDao.entity(id))
            let result: any = await this.regular_ConsumptionsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: RegularConsumption) {
        return true;
    }
}