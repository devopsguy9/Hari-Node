//import { regular_Consumptions } from '../models/entities/regular_consumptions';
import {Router} from "express";
//import {AttendanceController} from './controllers/AttendanceController';
import {CommunityController} from './controllers/communityController';
import {regular_ConsumptionsController} from './controllers/regular_ConsumptionsController';
import {hold_RequestsController} from './controllers/hold_RequestsController'; 
import {special_RequestsController} from './controllers/special_RequestsController'; 
import {special_Request_DetailsController} from './controllers/special_Request_DetailsController'; 
import {daily_Order_SheetsController} from './controllers/daily_Order_SheetsController'; 
import {delivery_SchedulesController} from './controllers/delivery_SchedulesController'; 
import {user_BillingsController} from './controllers/user_BillingsController';  
import {suppliersController} from './controllers/suppliersController'; 
import {supplier_User_Dwelling_MappersController} from './controllers/supplier_User_Dwelling_MappersController';   
import {UserController} from './controllers/userController'; 
import {DwellingController} from './controllers/dwellingController'; 
import {SubCommunityController} from './controllers/SubCommunityController'; 
import {productsController} from './controllers/productsController'; 

export class AppController{
    private router : Router = Router();

    getRouter(){
        //this.router.use("/attendance",new AttendanceController().getRouter());

        //this.router.use('/communities',new communitiesController().getRouter());

        this.router.use('/regular',new regular_ConsumptionsController().getRouter());

        this.router.use('/hold',new hold_RequestsController().getRouter());

        this.router.use('/special',new special_RequestsController().getRouter());

        this.router.use('/special_request_details',new special_Request_DetailsController().getRouter());

        this.router.use('/daily',new daily_Order_SheetsController().getRouter());
        
        this.router.use('/delivery',new delivery_SchedulesController().getRouter());
        
        this.router.use('/billing',new user_BillingsController().getRouter());

        this.router.use('/supplier',new suppliersController().getRouter());

        this.router.use('/user',new UserController().getRouter());

        this.router.use('/community',new CommunityController().getRouter());
        
        this.router.use('/dwelling',new DwellingController().getRouter());

         this.router.use('/subcommunity',new SubCommunityController().getRouter());

        this.router.use('/products',new productsController().getRouter());
        
        return this.router;
    }
}