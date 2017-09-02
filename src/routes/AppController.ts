//import { regular_Consumptions } from '../models/entities/regular_consumptions';
import {Router} from "express";
//import {AttendanceController} from './controllers/AttendanceController';
import {CommunityController} from './controllers/communityController';
import {RegularConsumptionsController} from './controllers/regularConsumptionsController';
import {HoldRequestsController} from './controllers/holdRequestsController'; 
import {SpecialRequestsController} from './controllers/specialRequestsController'; 
import {SpecialRequestDetailsController} from './controllers/specialRequestDetailsController'; 
import {DailyOrderSheetsController} from './controllers/dailyOrderSheetsController'; 
import {DeliverySchedulesController} from './controllers/deliverySchedulesController'; 
import {UserBillingsController} from './controllers/userBillingsController';  
import {SuppliersController} from './controllers/suppliersController'; 
import {SupplierUserDwellingMappersController} from './controllers/supplierUserDwellingMappersController';   
import {UsersController} from './controllers/usersController'; 
import {DwellingController} from './controllers/dwellingController'; 
import {SubCommunityController} from './controllers/subCommunityController'; 
import {ProductsController} from './controllers/productsController'; 

export class AppController{
    private router : Router = Router();

    getRouter(){
        //this.router.use("/attendance",new AttendanceController().getRouter());

        //this.router.use('/communities',new communitiesController().getRouter());

        this.router.use('/regular',new RegularConsumptionsController().getRouter());

        this.router.use('/hold',new HoldRequestsController().getRouter());

        this.router.use('/special',new SpecialRequestsController().getRouter());

        this.router.use('/special_request_details',new SpecialRequestDetailsController().getRouter());

        this.router.use('/daily',new DailyOrderSheetsController().getRouter());
        
        this.router.use('/delivery',new DeliverySchedulesController().getRouter());
        
        this.router.use('/billing',new UserBillingsController().getRouter());

        this.router.use('/supplier',new SuppliersController().getRouter());

        this.router.use('/user',new UsersController().getRouter());

        this.router.use('/community',new CommunityController().getRouter());
        
        this.router.use('/dwelling',new DwellingController().getRouter());

         this.router.use('/subcommunity',new SubCommunityController().getRouter());

        this.router.use('/products',new ProductsController().getRouter());
        
        return this.router;
    }
}