import "reflect-metadata";
import {createConnection} from "typeorm";

export class Connection{
    constructor(){
        this.connect();
    }
    connect(){
        createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "varaprasad",
        database: "Milkman",
        entities: [
            __dirname + "/entities/*.*",
        ],
        autoSchemaSync: true,
        }).then(async connection => {

            console.log("database connected");


}).catch(error => console.log(error));


}

}

