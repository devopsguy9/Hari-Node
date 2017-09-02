import { App } from "./../utils/App";
import { SupplierUserDwellingMappers } from "./../models/entities/supplierUserDwellingMappers";
import { SupplierUserDwellingMappersDAO } from "./../daos/supplierUserDwellingMappersDAO";

export class SupplierUserDwellingMappersService {
    private supplier_User_Dwelling_MappersDao: SupplierUserDwellingMappersDAO;


    constructor() {
        this.supplier_User_Dwelling_MappersDao = new SupplierUserDwellingMappersDAO();

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

    async save(item: SupplierUserDwellingMappers) {
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
            let data: SupplierUserDwellingMappers = (await this.supplier_User_Dwelling_MappersDao.entity(id))
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

    async validate(item: SupplierUserDwellingMappers) {
        return true;
    }
}