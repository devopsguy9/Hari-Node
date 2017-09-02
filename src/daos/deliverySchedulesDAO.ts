import { getEntityManager, Repository } from "typeorm";
import {DeliverySchedules} from "./../models/entities/deliverySchedules";


export class DeliverySchedulesDAO {

    private dao: Repository<DeliverySchedules>;

    constructor() {
        this.dao = getEntityManager().getRepository(DeliverySchedules);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: DeliverySchedules) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: DeliverySchedules) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(DeliverySchedulesDAO);