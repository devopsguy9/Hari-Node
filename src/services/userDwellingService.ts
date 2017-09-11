import { UserDwellingDAO } from '../daos/userDwellingsDAO';
import { UserDwelling } from "../models/entities/userDwellings";


export class UserDwellingService {
    private userDwellingDAO: UserDwellingDAO;
    
    constructor() {
        this.userDwellingDAO = new UserDwellingDAO();
        
    }
    
   async save(item: UserDwelling) {
        try {
          //  console.log("in try");
            //console.log(item.users.id);
            let data = await this.userDwellingDAO.search({user: item.users.id});
                if(item.id!=null && data.length>0){
                    let userDwellingData : any = await this.userDwellingDAO.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Updated Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.reject({ message: "user Already Exits" });
                }else {
                  //  console.log("else case");
                    let updateUserDwelling = await this.userDwellingDAO.save(item);
                        return Promise.resolve(updateUserDwelling);
                }
            }
                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }  



    async findOneAndAll(item:UserDwelling) {
            try {
                let users = item.users.id;
                console.log("User id is: ",users);
                let data = await this.userDwellingDAO.search({users: item.users.id});
                //console.log(data.toString);

                if(users != null && data.length>0){
                    console.log("I am just a tester");
                    let findoneuserdwelling = await this.userDwellingDAO.findAlll(users);
                    return Promise.resolve(findoneuserdwelling)
                }else if(users == null) {
                    
                        //return Promise.reject({ message: "user Already Exits" });
                        let findalluserdwellings = await this.userDwellingDAO.findAll();
                        return Promise.resolve(findalluserdwellings);
                }
            }
             catch (error) {
                return Promise.reject(error);
            }
        }

        async entity(id: any) {
            try {
                let data: any = await this.userDwellingDAO.entity(id);
                return Promise.resolve(data);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        

        // async findAll() {
        //     try {
        //         let data: any = await this.userDwellingDAO.findAll();
        //         return Promise.resolve(data)
        //     } catch (error) {
        //         return Promise.reject(error);
        //     }
        // }


}