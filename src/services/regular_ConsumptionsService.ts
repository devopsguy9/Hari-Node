import { App } from "./../utils/App";
import { regular_Consumptions } from "./../models/entities/regular_Consumptions";
import { regular_ConsumptionsDAO } from "./../daos/regular_ConsumptionsDAO";

export class regular_ConsumptionsService {
    private regular_ConsumptionsDao: regular_ConsumptionsDAO;


    constructor() {
        this.regular_ConsumptionsDao = new regular_ConsumptionsDAO();

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

    async save(item: regular_Consumptions) {
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
            let data: regular_Consumptions = (await this.regular_ConsumptionsDao.entity(id))
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

    async validate(item: regular_Consumptions) {
        return true;
    }
}