import { App } from "./../utils/App";
import { products } from "./../models/entities/products";
import { productsDAO } from "./../daos/productsDAO";

export class productsService {
    private productsDao: productsDAO;


    constructor() {
        this.productsDao = new productsDAO();

    }

    async findOneById(id) {
        try {
            let data: any = await this.productsDao.findOneById(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.productsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: products) {
        try {
            if (this.validate(item)) {
                let user_billingsData: any = await this.productsDao.save(item);
                let returnData = {
                    id: item.id,
                    message: "Saved Successfully"
                }
                return Promise.resolve(returnData);
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
            let data: products = (await this.productsDao.findOneById(id))
            let result: any = await this.productsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: products) {
        return true;
    }
}