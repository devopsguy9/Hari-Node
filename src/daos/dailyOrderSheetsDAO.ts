import { getEntityManager, Repository } from "typeorm";
import {DailyOrderSheet} from "./../models/entities/dailyOrderSheets";


export class DailyOrderSheetsDAO {

    private dao: Repository<DailyOrderSheet>;

    constructor() {
        this.dao = getEntityManager().getRepository(DailyOrderSheet);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: DailyOrderSheet) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: DailyOrderSheet) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(DailyOrderSheet)