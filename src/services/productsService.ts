import { App } from "./../utils/App";
import { Product } from "./../models/entities/products";
import { ProductsDAO } from "./../daos/productsDAO";

export class ProductsService {
    private productsDao: ProductsDAO;


    constructor() {
        this.productsDao = new ProductsDAO();

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

    async save(item: Product) {
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
            let data: Product = (await this.productsDao.findOneById(id))
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

    async validate(item: Product) {
        return true;
    }
}