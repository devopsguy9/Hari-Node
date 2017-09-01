import { App } from "./../utils/App";
import { hold_Requests } from "./../models/entities/hold_Requests";
import { hold_RequestsDAO } from "./../daos/hold_RequestsDAO";

export class hold_RequestsService {
    private hold_RequestsDao:hold_RequestsDAO;


    constructor() {
        this.hold_RequestsDao = new hold_RequestsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.hold_RequestsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.hold_RequestsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item:hold_Requests) {
        try {
            if (this.validate(item)) {
                
                let hold_requestsData: any = await this.hold_RequestsDao.save(item);
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
            let data: hold_Requests = (await this.hold_RequestsDao.entity(id))
            let result: any = await this.hold_RequestsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: hold_Requests) {
        return true;
    }
}