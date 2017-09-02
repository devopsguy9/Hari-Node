import { getEntityManager, Repository } from "typeorm";
import {HoldRequests} from "./../models/entities/holdRequests";


export class HoldRequestsDAO {

    private dao: Repository<HoldRequests>;

    constructor() {
        this.dao = getEntityManager().getRepository(HoldRequests);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: HoldRequests) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: HoldRequests) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(HoldRequestsDAO);