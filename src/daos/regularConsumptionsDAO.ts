import { getEntityManager, Repository } from "typeorm";
import {RegularConsumptions} from "./../models/entities/regularConsumptions";


export class RegularConsumptionsDAO {

    private dao: Repository<RegularConsumptions>;

    constructor() {
        this.dao = getEntityManager().getRepository(RegularConsumptions);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: RegularConsumptions) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: RegularConsumptions) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(RegularConsumptionsDAO);