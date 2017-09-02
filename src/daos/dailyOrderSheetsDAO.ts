import { getEntityManager, Repository } from "typeorm";
import {DailyOrderSheets} from "./../models/entities/dailyOrderSheets";


export class DailyOrderSheetsDAO {

    private dao: Repository<DailyOrderSheets>;

    constructor() {
        this.dao = getEntityManager().getRepository(DailyOrderSheets);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: DailyOrderSheets) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: DailyOrderSheets) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(DailyOrderSheets)