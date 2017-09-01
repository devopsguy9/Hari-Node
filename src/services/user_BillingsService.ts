import { App } from "./../utils/App";
import { user_Billings } from "./../models/entities/user_Billings";
import { user_BillingsDAO } from "./../daos/user_BillingsDAO";

export class user_BillingsService {
    private user_BillingsDao: user_BillingsDAO;


    constructor() {
        this.user_BillingsDao = new user_BillingsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.user_BillingsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.user_BillingsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: user_Billings) {
        try {
            if (this.validate(item)) {
                let user_billingsData: any = await this.user_BillingsDao.save(item);
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
            let data: user_Billings = (await this.user_BillingsDao.entity(id))
            let result: any = await this.user_BillingsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: user_Billings) {
        return true;
    }
}