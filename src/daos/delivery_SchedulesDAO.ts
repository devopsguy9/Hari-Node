import { getEntityManager, Repository } from "typeorm";
import {delivery_Schedules} from "./../models/entities/delivery_Schedules";


export class delivery_SchedulesDAO {

    private dao: Repository<delivery_Schedules>;

    constructor() {
        this.dao = getEntityManager().getRepository(delivery_Schedules);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: delivery_Schedules) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: delivery_Schedules) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(delivery_SchedulesDAO);