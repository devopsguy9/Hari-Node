import { getEntityManager, Repository } from "typeorm";
import {SpecialRequestDetails} from "./../models/entities/specialRequestDetails";


export class SpecialRequestDetailsDAO {

    private dao: Repository<SpecialRequestDetails>;

    constructor() {
        this.dao = getEntityManager().getRepository(SpecialRequestDetails);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: SpecialRequestDetails) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: SpecialRequestDetails) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(SpecialRequestDetailsDAO);