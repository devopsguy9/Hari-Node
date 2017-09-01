import { App } from "./../utils/App";
import { supplier_User_Dwelling_Mappers } from "./../models/entities/supplier_User_Dwelling_Mappers";
import { supplier_User_Dwelling_MappersDAO } from "./../daos/supplier_User_Dwelling_MappersDAO";

export class supplier_User_Dwelling_MappersService {
    private supplier_User_Dwelling_MappersDao: supplier_User_Dwelling_MappersDAO;


    constructor() {
        this.supplier_User_Dwelling_MappersDao = new supplier_User_Dwelling_MappersDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.supplier_User_Dwelling_MappersDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.supplier_User_Dwelling_MappersDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: supplier_User_Dwelling_Mappers) {
        try {
            if (this.validate(item)) {
                let supplier_User_Dwelling_MappersData: any = await this.supplier_User_Dwelling_MappersDao.save(item);
                let returnData = {
                    //id: item.id,
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
            let data: supplier_User_Dwelling_Mappers = (await this.supplier_User_Dwelling_MappersDao.entity(id))
            let result: any = await this.supplier_User_Dwelling_MappersDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: supplier_User_Dwelling_Mappers) {
        return true;
    }
}