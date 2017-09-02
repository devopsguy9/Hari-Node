import { getEntityManager, Repository } from "typeorm";
import {Suppliers} from "./../models/entities/suppliers";


export class SuppliersDAO {

    private dao: Repository<Suppliers>;

    constructor() {
        this.dao = getEntityManager().getRepository(Suppliers);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: Suppliers) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: Suppliers) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SuppliersDAO);