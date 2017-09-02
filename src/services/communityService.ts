



import { CommunityDAO } from '../daos/communityDAO';
import { communities } from "../models/entities/communities";


export class CommunityService {
    private communityDAO: CommunityDAO;
    
    constructor() {
        this.communityDAO = new CommunityDAO();
        
    }
    
    async saveUser(item: communities) {
        try {
        
                console.log("In community service");
                let data = await this.communityDAO.search({ name: item.name });
                if(data.length>0){
                        let returnData={
                            "message" : "Community already exists",
                            "data" : data
                        }
                      return Promise.resolve(returnData);  
                            }else{
                        let addData = await this.communityDAO.save(item);
                        let returnData ={
                                "message": "Community has been saved successfully",
                                "data" : addData
                        }
                        return Promise.resolve(returnData);
                    }
                }

                  catch (error) {
                    return Promise.reject(error);
                    }
        
        }


  async getCommunityById(item: any){
        try{
            console.log("In get community id method");
            let communityData = await this.communityDAO.findRecord({id : item});
            let message="Community found";
            if(communityData==undefined)
            message="Community Not found";
            
            let returnData = { 
                data : communityData,
                message : message
            }
                return Promise.resolve(returnData);
                }catch(error){
                    console.log(error);
                    return Promise.reject(error);
                }
   }



  /* async deleteUserById(item:any){
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

  async getCommunities(){
      try{
          console.log("In get all communities");
          let communityData = await this.communityDAO.findAll();
          let returnData = {
              data : communityData,
              no_of_records: communityData.length
          }
          return Promise.resolve(returnData);
      }
   catch(error){
      console.log(error);
      return Promise.reject(error);
  }

}

  async updateCommunity(id: any, item :communities){
    try{
    
    
        let communityToUpdate :any = await this.communityDAO.findOneById(id);
        if(communityToUpdate != undefined){
            communityToUpdate.name= item.name;
            communityToUpdate.address= item.address;
            communityToUpdate.active = item.active;
            communityToUpdate.locality= item.locality;
            communityToUpdate.city= item.city;
            communityToUpdate.state = item.state;
            communityToUpdate.country = item.country;
            communityToUpdate.pincode = item.pincode;

            let updateCommunity = await this.communityDAO.save(communityToUpdate);
            let returnData = { 
                data: updateCommunity,
                message:"Community record has been updated"
            }
            return Promise.resolve(returnData);
        } else{
            let returnData = {
                message : "Community record not found"
            }
            return Promise.resolve(returnData);
        }   
    }catch(error){
        console.log(error);
        return Promise.reject(error);
    }
}


}