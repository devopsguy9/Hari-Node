import {getEntityManager,Repository} from "typeorm";
import {IBaseInterface} from '../../config/IBaseInterface';
import {communities} from '../../models/entites/communities';

export interface ICommunities extends IBaseInterface{

    search(data:any);

    save(data:communities);
}