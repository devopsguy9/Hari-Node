import "reflect-metadata";

import{createConnection,ConnectionOptions} from "typeorm";
import { users } from "../models/entities/users";
import {communities} from "../models/entities/communities";
import {sub_Communities} from "../models/entities/sub_Communities";


export class  ormConfig{
 
    public connectionOptions: ConnectionOptions = {
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "digitallync",
        database: "phase1"
    },
    entities: [users,communities,sub_Communities],
    autoSchemaSync: true
};
    
    constructor(){

        this.getConnection();
        
    }
    
    
    public  getConnection(){

        
        createConnection(this.connectionOptions).then(connection => {
if(connection){
    console.log("Database connection successfull");
}

    

});
        
        
        
        
    }
    
}
