import { getEntityManager, Repository } from "typeorm";
import {daily_Order_Sheets} from "./../models/entities/daily_Order_Sheets";


export class daily_Order_SheetsDAO {

    private dao: Repository<daily_Order_Sheets>;

    constructor() {
        this.dao = getEntityManager().getRepository(daily_Order_Sheets);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: daily_Order_Sheets) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: daily_Order_Sheets) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(daily_Order_Sheets)