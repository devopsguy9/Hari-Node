import { App } from "./../utils/App";
import { DeliverySchedules } from "./../models/entities/deliverySchedules";
import { DeliverySchedulesDAO } from "./../daos/deliverySchedulesDAO";

export class DeliverySchedulesService {
    private delivery_SchedulesDao: DeliverySchedulesDAO;


    constructor() {
        this.delivery_SchedulesDao = new DeliverySchedulesDAO();

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

    async save(item: DeliverySchedules) {
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
            let data: DeliverySchedules = (await this.delivery_SchedulesDao.entity(id))
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

    async validate(item: DeliverySchedules) {
        return true;
    }
}