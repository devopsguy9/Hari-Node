import { getEntityManager, Repository } from "typeorm";
import {supplier_User_Dwelling_Mappers} from "./../models/entities/supplier_User_Dwelling_Mappers";


export class supplier_User_Dwelling_MappersDAO {

    private dao: Repository<supplier_User_Dwelling_Mappers>;

    constructor() {
        this.dao = getEntityManager().getRepository(supplier_User_Dwelling_Mappers);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: supplier_User_Dwelling_Mappers) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: supplier_User_Dwelling_Mappers) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(supplier_User_Dwelling_MappersDAO);