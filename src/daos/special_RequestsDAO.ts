import { getEntityManager, Repository } from "typeorm";
import {special_Requests} from "./../models/entities/special_Requests";


export class special_RequestsDAO {

    private dao: Repository<special_Requests>;

    constructor() {
        this.dao = getEntityManager().getRepository(special_Requests);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: special_Requests) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: special_Requests) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(special_RequestsDAO);