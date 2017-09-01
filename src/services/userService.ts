


import { usersDAO } from '../daos/usersDAO';
import { users } from "../models/entities/users";


export class UserService {
    private usersDAO: usersDAO;
    
    constructor() {
        this.usersDAO = new usersDAO();
        
    }
    
    async saveUser(item: users) {
        try {
        
                console.log("In user service");
                console.log(item)
                let data = await this.usersDAO.search({ phone: item.phone });
                if(data.length>0){
                        let returnData={
                            "message" : "User already exists",
                            "data" : data
                        }
                      return Promise.resolve(returnData);  
                            }else{
                        let addData = await this.usersDAO.save(item);
                        let returnData ={
                                "message": "User has been saved successfully",
                                "data" : addData
                        }
                        return Promise.resolve(returnData);
                    }
                }

                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }


   async getUserById(item: any){
       try{
           console.log("In get Userby id method");
           let userData = await this.usersDAO.findRecord({id : item});
           let message="User found";
           if(userData==undefined)
           message="User Not found";
           
           let returnData = { 
               data : userData,
               message : message
           }

           
            return Promise.resolve(returnData);
       }catch(error){
           console.log(error);
           return Promise.reject(error);
       }
   }



  async deleteUserById(item:any){
      try{
           console.log("In get deleteUserById id method");
           let userData = await this.usersDAO.delete({id : item});
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


  async getUsers(){
      try{
          console.log("In get all users");
          let usersData = await this.usersDAO.findAll();
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

async updateUser(id: any, item :users){
    try{
    
    
        let userToUpdate :any = await this.usersDAO.findOneById(id);
        if(userToUpdate != undefined){
            userToUpdate.name= item.name;
            userToUpdate.email= item.email;
            userToUpdate.phone = item.phone;
            userToUpdate.password= item.password;
            userToUpdate.salt= item.salt;

            let updateUser = await this.usersDAO.save(userToUpdate);
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


}