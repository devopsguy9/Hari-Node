import { getEntityManager, Repository } from "typeorm";
import {RegularConsumption} from "./../models/entities/regularConsumptions";
import {ProductSku} from './../models/entities/productSku';

export class RegularConsumptionsDAO {

    public dao: Repository<RegularConsumption>;
    public dao1: Repository<ProductSku>;
    constructor() {
        this.dao = getEntityManager().getRepository(RegularConsumption);
        this.dao1 = getEntityManager().getRepository(ProductSku);
    }

    search(data: any) {
        return this.dao.find(data)
    }

    search1(data: any) {
        return this.dao1.find(data)
    }

    save(data: RegularConsumption) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id)
    }

    delete(data: RegularConsumption) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data)
    }

}

Object.seal(RegularConsumptionsDAO);