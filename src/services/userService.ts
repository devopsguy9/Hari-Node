import {makeRepository} from "../dao/makeRepository";
import {users} from "../models/entites/users";

export class userService{
    private makeRepository:makeRepository;

    constructor(){
        this.makeRepository = new makeRepository();
    }

    async saveUser(item:users){
        try{
            console.log("users service");
            let data = await this.makeRepository.search({phone:item.phone})
            if(data.length>0){
                let returnData = {
                    "message":"User already exists",
                    "data":data
                }
                return Promise.resolve(returnData);
            }else{
                let addData = await this.makeRepository.save(item);
                let returnData = {
                    "message":"User data has been saved successfully",
                    "data":addData
                }
                return Promise.resolve(returnData);
                
            }
        }
        catch(error){
            return Promise.reject(error);
        }
    }
}