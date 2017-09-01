import { App } from "./../utils/App";
import { special_Requests } from "./../models/entities/special_Requests";
import { special_RequestsDAO } from "./../daos/special_RequestsDAO";

export class special_RequestsService {
    private special_RequestsDao: special_RequestsDAO;


    constructor() {
        this.special_RequestsDao = new special_RequestsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.special_RequestsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.special_RequestsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: special_Requests) {
        try {
            if (this.validate(item)) {
                let special_RequestsData: any = await this.special_RequestsDao.save(item);
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
            let data: special_Requests = (await this.special_RequestsDao.entity(id))
            let result: any = await this.special_RequestsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: special_Requests) {
        return true;
    }
}