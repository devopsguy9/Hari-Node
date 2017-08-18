export class DemoService {
    red: any;
    constructor(){
       this.greet(this.red);
    }
    async greet(red:any){
        try{
         await  console.log("Hello Hari Prasad Welcome.....!!!!!");
         var d="helo Hari Prasad....!!!!!...let's start working";
        return Promise.resolve(d);
        }catch(error){
          console.log("error");
          return Promise.reject(error)
    
        }
    } 
}