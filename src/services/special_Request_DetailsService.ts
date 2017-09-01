import { App } from "./../utils/App";
import { special_Request_Details } from "./../models/entities/special_Request_Details";
import { special_Requests_DetailsDAO } from "./../daos/special_Requests_DetailsDAO";

export class special_Request_DetailsService {
    private special_Requests_DetailsDao: special_Requests_DetailsDAO;


    constructor() {
        this.special_Requests_DetailsDao = new special_Requests_DetailsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.special_Requests_DetailsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.special_Requests_DetailsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: special_Request_Details) {
        try {
            if (this.validate(item)) {
                let regular_consumptionsData: any = await this.special_Requests_DetailsDao.save(item);
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
            let data: special_Request_Details = (await this.special_Requests_DetailsDao.entity(id))
            let result: any = await this.special_Requests_DetailsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: special_Request_Details) {
        return true;
    }
}