import { getEntityManager, Repository } from "typeorm";
import {DeliverySchedule} from "./../models/entities/deliverySchedules";


export class DeliverySchedulesDAO {

    public dao: Repository<DeliverySchedule>;

    constructor() {
        this.dao = getEntityManager().getRepository(DeliverySchedule);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: DeliverySchedule) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: DeliverySchedule) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(DeliverySchedulesDAO);