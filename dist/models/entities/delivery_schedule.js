"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var delivery_schedule = (function () {
    function delivery_schedule() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "sub_community_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "user_dwelling_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "product_sku_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "user_billing_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "supplier_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], delivery_schedule.prototype, "delivery_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], delivery_schedule.prototype, "community_id", void 0);
    delivery_schedule = __decorate([
        typeorm_1.Entity()
    ], delivery_schedule);
    return delivery_schedule;
}());
exports.delivery_schedule = delivery_schedule;
//# sourceMappingURL=delivery_schedule.js.map