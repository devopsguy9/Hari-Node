import { App } from "./../utils/App";
import { Supplier } from "./../models/entities/suppliers";
import { SuppliersDAO } from "./../daos/suppliersDAO";

export class SuppliersService {
    private suppliersDao: SuppliersDAO;


    constructor() {
        this.suppliersDao = new SuppliersDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.suppliersDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.suppliersDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Supplier) {
        try {
            if (this.validate(item)) {
                let suppliersData: any = await this.suppliersDao.save(item);
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
            let data: Supplier = (await this.suppliersDao.entity(id))
            let result: any = await this.suppliersDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Supplier) {
        return true;
    }
}