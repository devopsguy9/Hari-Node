import { App } from "./../utils/App";
import { SpecialRequestDetails } from "./../models/entities/specialRequestDetails";
import { SpecialRequestDetailsDAO } from "./../daos/specialRequestDetailsDAO";

export class SpecialRequestDetailsService {
    private special_Requests_DetailsDao: SpecialRequestDetailsDAO;


    constructor() {
        this.special_Requests_DetailsDao = new SpecialRequestDetailsDAO();

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

    async save(item: SpecialRequestDetails) {
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
            let data: SpecialRequestDetails = (await this.special_Requests_DetailsDao.entity(id))
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

    async validate(item: SpecialRequestDetails) {
        return true;
    }
}