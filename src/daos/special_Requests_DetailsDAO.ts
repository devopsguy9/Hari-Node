import { getEntityManager, Repository } from "typeorm";
import {special_Request_Details} from "./../models/entities/special_Request_Details";


export class special_Requests_DetailsDAO {

    private dao: Repository<special_Request_Details>;

    constructor() {
        this.dao = getEntityManager().getRepository(special_Request_Details);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    save(data: special_Request_Details) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: special_Request_Details) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(special_Requests_DetailsDAO);