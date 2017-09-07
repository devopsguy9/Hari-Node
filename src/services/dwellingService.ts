


import { DwellingDAO } from '../daos/dwellingDAO';
import { Dwelling } from "../models/entities/dwellings";


export class DwellingService {
    private dwellingDAO: DwellingDAO;
    
    constructor() {
        this.dwellingDAO = new DwellingDAO();
        
    }
    
    async saveDwelling(item: Dwelling) {
        try {
        
                console.log("In dwelling service");
                let data = await this.dwellingDAO.search({ name: item.name });
                if(data.length>0){
                        let returnData={
                            "message" : "Dwelling already exists",
                            "data" : data
                        }
                      return Promise.resolve(returnData);  
                            }else{
                        let addData = await this.dwellingDAO.save(item);
                        let returnData ={
                                "message": "Dwelling has been saved successfully",
                                "data" : addData
                        }
                        return Promise.resolve(returnData);
                    }
                }

                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }


  async getDwellingById(item: any){
       try{
           console.log("In get dwelling by id method");
           let dwellingData = await this.dwellingDAO.findRecord({id : item});
           let message="dwelling found";
           if(dwellingData==undefined)
           message="Dwelling Not found";
           
           let returnData = { 
               data : dwellingData,
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
           let userData = await this.dwellingDAO.delete({id : item});
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
          let usersData = await this.dwellingDAO.findAll();
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

/*async updateUser(id: any, item :Dwelling){
    try{
    
    
        let userToUpdate :any = await this.dwellingDAO.findOneById(id);
        if(userToUpdate != undefined){
            userToUpdate.name= item.name;
            userToUpdate.sub_community_id= item.sub_communities;
            userToUpdate.active = item.active;

            let updateUser = await this.dwellingDAO.save(userToUpdate);
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