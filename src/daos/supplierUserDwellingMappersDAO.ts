import { getEntityManager, Repository } from "typeorm";
import {SupplierUserDwellingMappers} from "./../models/entities/supplierUserDwellingMappers";


export class SupplierUserDwellingMappersDAO {

    private dao: Repository<SupplierUserDwellingMappers>;

    constructor() {
        this.dao = getEntityManager().getRepository(SupplierUserDwellingMappers);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: SupplierUserDwellingMappers) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: SupplierUserDwellingMappers) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SupplierUserDwellingMappersDAO);