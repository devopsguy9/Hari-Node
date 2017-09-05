import { getEntityManager, Repository } from "typeorm";
import {RegularConsumption} from "./../models/entities/regularConsumptions";


export class RegularConsumptionsDAO {

    private dao: Repository<RegularConsumption>;

    constructor() {
        this.dao = getEntityManager().getRepository(RegularConsumption);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: RegularConsumption) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: RegularConsumption) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(RegularConsumptionsDAO);