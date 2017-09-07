import { getEntityManager, Repository } from "typeorm";
import {Supplier} from "./../models/entities/suppliers";


export class SuppliersDAO {

    public dao: Repository<Supplier>;

    constructor() {
        this.dao = getEntityManager().getRepository(Supplier);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: Supplier) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: Supplier) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SuppliersDAO);