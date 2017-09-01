import { getEntityManager, Repository } from "typeorm";
import {regular_Consumptions} from "./../models/entities/regular_Consumptions";


export class regular_ConsumptionsDAO {

    private dao: Repository<regular_Consumptions>;

    constructor() {
        this.dao = getEntityManager().getRepository(regular_Consumptions);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: regular_Consumptions) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: regular_Consumptions) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(regular_ConsumptionsDAO);