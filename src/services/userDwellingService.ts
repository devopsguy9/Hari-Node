import { UserDwellingDAO } from '../daos/userDwellingsDAO';
import { UserDwelling } from "../models/entities/userDwellings";


export class UserDwellingService {
    private userDwellingDAO: UserDwellingDAO;
    
    constructor() {
        this.userDwellingDAO = new UserDwellingDAO();
        
    }
    
    async saveUserDwelling(item: UserDwelling) {
        try {
        
                console.log("In userdwelling service");
                //let data = await this.userDwellingDAO.search({ users: item.user_id });
               /* if(data.length>0){
                        let returnData={
                            "message" : "User already exists",
                            "data" : data
                        }
                      return Promise.resolve(returnData);  
                            }else{   */
                        let addUserDwellingData = await this.userDwellingDAO.save(item);
                        let returnData ={
                                "message": "User Dwelling has been saved successfully",
                                "data" : addUserDwellingData
                        }
                        return Promise.resolve(returnData);
                    }
               // }

                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }


  async getUserDwellingById(item: any){
       try{
           console.log("In get Userby id method");
           let userDwellingData = await this.userDwellingDAO.findRecord({id : item});
           let message="User Dwelling found";
           if(userDwellingData==undefined)
           message="User Dwelling Not found";
           
           let returnData = { 
               data : userDwellingData,
               message : message
           }

           
            return Promise.resolve(returnData);
       }catch(error){
           console.log(error);
           return Promise.reject(error);
       }
   }


/*
  async deleteUserById(item:any){
      try{
           console.log("In get deleteUserById id method");
           let userData = await this.userDAO.delete({id : item});
           let message="User has been deleted";
           if(userData==undefined)
           message="User Not found";
           
           let returnData={
               "message" : message,
               "data": userData
           }
           return Promise.resolve(returnData);
       }catch(error){
           console.log(error);
           return Promise.reject(error);
       }
  }
*/
  async getUserDwellings(){
      try{
          console.log("In get all users");
          let usersData = await this.userDwellingDAO.findAll();
          let returnData = {
              data : usersData,
              message: usersData.length
          }
          return Promise.resolve(returnData);
      }
   catch(error){
      console.log(error);
      return Promise.reject(error);
  }

}

   /* async updateUser(id: any, item :user){
    try{
    
    
        let userToUpdate :any = await this.userDAO.findOneById(id);
        if(userToUpdate != undefined){
            userToUpdate.name= item.name;
            userToUpdate.email= item.email;
            userToUpdate.phone = item.phone;
            userToUpdate.password= item.password;
            userToUpdate.salt= item.salt;
            let updateUser = await this.userDAO.save(userToUpdate);
            let returnData = { 
                data: updateUser,
                message:"User record has been updated"
            }
            return Promise.resolve(returnData);
        } else{
            let returnData = {
                message : "User record not found"
            }
            return Promise.resolve(returnData);
        }   
    }catch(error){
        console.log(error);
        return Promise.reject(error);
    }
}
*/

}