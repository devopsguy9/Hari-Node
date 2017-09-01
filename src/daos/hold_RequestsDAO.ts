import { getEntityManager, Repository } from "typeorm";
import {hold_Requests} from "./../models/entities/hold_Requests";


export class hold_RequestsDAO {

    private dao: Repository<hold_Requests>;

    constructor() {
        this.dao = getEntityManager().getRepository(hold_Requests);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: hold_Requests) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: hold_Requests) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(hold_RequestsDAO);