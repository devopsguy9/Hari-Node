import "reflect-metadata";

import{createConnection,ConnectionOptions} from "typeorm";
import { Users } from "../models/entities/users";
import {communities} from "../models/entities/communities";
import {SubCommunities} from "../models/entities/subCommunities";


export class  OrmConfig{
 
    public connectionOptions: ConnectionOptions = {
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "digitallync",
        database: "phase1"
    },
    entities: [Users,communities,SubCommunities],
    autoSchemaSync: false
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
