import { getEntityManager, Repository } from "typeorm";
import {SpecialRequestDetail} from "./../models/entities/specialRequestDetails";


export class SpecialRequestDetailsDAO {

    private dao: Repository<SpecialRequestDetail>;

    constructor() {
        this.dao = getEntityManager().getRepository(SpecialRequestDetail);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: SpecialRequestDetail) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: SpecialRequestDetail) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SpecialRequestDetailsDAO);