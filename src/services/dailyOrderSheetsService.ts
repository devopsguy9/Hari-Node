import { App } from "./../utils/App";
import { DailyOrderSheets } from "./../models/entities/dailyOrderSheets";
import { DailyOrderSheetsDAO } from "./../daos/dailyOrderSheetsDAO";

export class DailyOrderSheetsService {
    private dailyOrderSheetsDao: DailyOrderSheetsDAO;


    constructor() {
        this.dailyOrderSheetsDao = new DailyOrderSheetsDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.dailyOrderSheetsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.dailyOrderSheetsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: DailyOrderSheets) {
        try {
            if (this.validate(item)) {
                let daily_Order_SheetsData: any = await this.dailyOrderSheetsDao.save(item);
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
            let data: DailyOrderSheets = (await this.dailyOrderSheetsDao.entity(id))
            let result: any = await this.dailyOrderSheetsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: DailyOrderSheets) {
        return true;
    }
}