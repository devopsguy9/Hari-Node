import { getEntityManager, Repository } from "typeorm";
import {UserBillings} from "./../models/entities/userBillings";


export class UserBillingsDAO {

    private dao: Repository<UserBillings>;

    constructor() {
        this.dao = getEntityManager().getRepository(UserBillings);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: UserBillings) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: UserBillings) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(UserBillingsDAO);