import { App } from "./../utils/App";
import { RegularConsumptions } from "./../models/entities/regularConsumptions";
import { RegularConsumptionsDAO } from "./../daos/regularConsumptionsDAO";

export class RegularConsumptionsService {
    private regular_ConsumptionsDao: RegularConsumptionsDAO;


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

    async save(item: RegularConsumptions) {
        try {
            if (this.validate(item)) {
                let regular_ConsumptionsData: any = await this.regular_ConsumptionsDao.save(item);
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
            let data: RegularConsumptions = (await this.regular_ConsumptionsDao.entity(id))
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

    async validate(item: RegularConsumptions) {
        return true;
    }
}