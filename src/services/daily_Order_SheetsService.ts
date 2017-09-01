import { App } from "./../utils/App";
import { daily_Order_Sheets } from "./../models/entities/daily_Order_Sheets";
import { daily_Order_SheetsDAO } from "./../daos/daily_Order_SheetsDAO";

export class daily_Order_SheetsService {
    private daily_Order_SheetsDao: daily_Order_SheetsDAO;


    constructor() {
        this.daily_Order_SheetsDao = new daily_Order_SheetsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.daily_Order_SheetsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.daily_Order_SheetsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: daily_Order_Sheets) {
        try {
            if (this.validate(item)) {
                let daily_Order_SheetsData: any = await this.daily_Order_SheetsDao.save(item);
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
            let data: daily_Order_Sheets = (await this.daily_Order_SheetsDao.entity(id))
            let result: any = await this.daily_Order_SheetsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: daily_Order_Sheets) {
        return true;
    }
}