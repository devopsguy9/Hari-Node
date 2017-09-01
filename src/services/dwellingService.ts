


import { DwellingDAO } from '../daos/dwellingDAO';
import { dwellings } from "../models/entities/dwellings";


export class DwellingService {
    private dwellingDAO: DwellingDAO;
    
    constructor() {
        this.dwellingDAO = new DwellingDAO();
        
    }
    
    async saveDwelling(item: dwellings) {
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
  async getDwellings(){
      try{
          console.log("In get all dwellings");
          let dwellingsData = await this.dwellingDAO.findAll();
          let returnData = {
              data : dwellingsData,
              message: dwellingsData.length
          }
          return Promise.resolve(returnData);
      }
   catch(error){
      console.log(error);
      return Promise.reject(error);
  }

}

 async updateDwelling(id: any, item :dwellings){
    try{
    
    
        let dwellingToUpdate :any = await this.dwellingDAO.findOneById(id);
        if(dwellingToUpdate != undefined){
            dwellingToUpdate.name= item.name;
            dwellingToUpdate.email= item.sub_community_id;
            dwellingToUpdate.active = item.active;
            

            let updateDwelling = await this.dwellingDAO.save(dwellingToUpdate);
            let returnData = { 
                data: updateDwelling,
                message:"Dwelling record has been updated"
            }
            return Promise.resolve(returnData);
        } else{
            let returnData = {
                message : "Dwelling record not found"
            }
            return Promise.resolve(returnData);
        }   
    }catch(error){
        console.log(error);
        return Promise.reject(error);
    }
}


}