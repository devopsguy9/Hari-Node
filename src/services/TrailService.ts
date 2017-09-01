export class TrailService{
    reqdata:any;
    constructor(){
        this.entity(this.reqdata);
    }

    async entity(reqdata:any){
        try{    
            const user = {
                name:'Mahesh',
                email:'maheshswamymeegada@gmail.com'
            }
            //console.log("This is return for promise success",user);
            return Promise.resolve(user);            
        } catch(error){
            console.log("This is an error message");
            return Promise.reject(error);
        }
    }
}