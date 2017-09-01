import { getEntityManager, Repository } from "typeorm";
import {user_Billings} from "./../models/entities/user_Billings";


export class user_BillingsDAO {

    private dao: Repository<user_Billings>;

    constructor() {
        this.dao = getEntityManager().getRepository(user_Billings);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: user_Billings) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: user_Billings) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(user_BillingsDAO);