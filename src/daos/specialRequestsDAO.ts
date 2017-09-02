import { getEntityManager, Repository } from "typeorm";
import {SpecialRequests} from "./../models/entities/specialRequests";


export class SpecialRequestsDAO {

    private dao: Repository<SpecialRequests>;

    constructor() {
        this.dao = getEntityManager().getRepository(SpecialRequests);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: SpecialRequests) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: SpecialRequests) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SpecialRequestsDAO);