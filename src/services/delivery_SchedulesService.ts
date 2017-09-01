import { App } from "./../utils/App";
import { delivery_Schedules } from "./../models/entities/delivery_Schedules";
import { delivery_SchedulesDAO } from "./../daos/delivery_SchedulesDAO";

export class delivery_SchedulesService {
    private delivery_SchedulesDao: delivery_SchedulesDAO;


    constructor() {
        this.delivery_SchedulesDao = new delivery_SchedulesDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.delivery_SchedulesDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.delivery_SchedulesDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: delivery_Schedules) {
        try {
            if (this.validate(item)) {
                let delivery_SchedulesData: any = await this.delivery_SchedulesDao.save(item);
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
            let data: delivery_Schedules = (await this.delivery_SchedulesDao.entity(id))
            let result: any = await this.delivery_SchedulesDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: delivery_Schedules) {
        return true;
    }
}