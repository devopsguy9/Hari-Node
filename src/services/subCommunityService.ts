import { SubCommunityDAO } from '../daos/subCommunityDAO';
import { SubCommunity } from "../models/entities/subCommunities";


export class SubCommunityService {
    private subCommunityDAO: SubCommunityDAO;
    
    constructor() {
        this.subCommunityDAO = new SubCommunityDAO();
        
    }
    
    async saveSubCommunity(item: SubCommunity) {
        try {
        
                console.log("In sub community service");
                let data = await this.subCommunityDAO.search({ name: item.name });
                if(data.length>0){
                        let returnData={
                            "message" : "Sub Community already exists",
                            "data" : data
                        }
                      return Promise.resolve(returnData);  
                            }else{
                        let addData = await this.subCommunityDAO.save(item);
                        let returnData ={
                                "message": "Sub Community has been saved successfully",
                                "data" : addData
                        }
                        return Promise.resolve(returnData);
                    }
                }

                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }


 async getSubCommunityById(item: any){
       try{
           console.log("In  getSubCommunityById id method");
           let subCommunityData = await this.subCommunityDAO.findRecord({id : item});
           let message="Sub Community found";
           if(subCommunityData==undefined)
           message="Sub Community Not found";
           
           let returnData = { 
               data : subCommunityData,
               message : message
           }

           
            return Promise.resolve(returnData);
       }catch(error){
           console.log(error);
           return Promise.reject(error);
       }
   }


 
  async getAllSubCommunities(){
      try{
          console.log("In getAllSubCommunities");
          let subCommunityData = await this.subCommunityDAO.findAll();
          let returnData = {
              data : subCommunityData,
              message: subCommunityData.length
          }
          return Promise.resolve(returnData);
      }
   catch(error){
      console.log(error);
      return Promise.reject(error);
  }

}

async updateSubCommunity(id: any, item :SubCommunity){
    try{
    
    
        let SubCommunityToUpdate :any = await this.subCommunityDAO.findOneById(id);
        if(SubCommunityToUpdate != undefined){
            SubCommunityToUpdate.name= item.name;
            SubCommunityToUpdate.community_id= item.community;
            SubCommunityToUpdate.active = item.active;
            

            let updateSubCommunity = await this.subCommunityDAO.save(SubCommunityToUpdate);
            let returnData = { 
                data: updateSubCommunity,
                message:"Sub Community record has been updated"
            }
            return Promise.resolve(returnData);
        } else{
            let returnData = {
                message : "Sub Community record not found"
            }
            return Promise.resolve(returnData);
        }   
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





}