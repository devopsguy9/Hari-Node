


import { UsersDAO } from '../daos/usersDAO';
import { Users } from "../models/entities/users";


export class UsersService {
    private userDAO: UsersDAO;
    
    constructor() {
        this.userDAO = new UsersDAO();
        
    }
    
    async saveUser(item: Users) {
        try {
        
                console.log("In user service");
                let data = await this.userDAO.search({ phone: item.phone });
                if(data.length>0){
                        let returnData={
                            "message" : "User already exists",
                            "data" : data
                        }
                      return Promise.resolve(returnData);  
                            }else{
                        let addData = await this.userDAO.save(item);
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
           let userData = await this.userDAO.findRecord({id : item});
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


  async getUsers(){
      try{
          console.log("In get all users");
          let usersData = await this.userDAO.findAll();
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

async updateUser(id: any, item :Users){
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


}