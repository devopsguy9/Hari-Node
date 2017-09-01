import { getEntityManager, Repository } from "typeorm";
import {suppliers} from "./../models/entities/suppliers";


export class suppliersDAO {

    private dao: Repository<suppliers>;

    constructor() {
        this.dao = getEntityManager().getRepository(suppliers);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: suppliers) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: suppliers) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(suppliersDAO);