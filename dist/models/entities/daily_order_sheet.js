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
var daily_order_sheet = (function () {
    function daily_order_sheet() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], daily_order_sheet.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], daily_order_sheet.prototype, "manufacture_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], daily_order_sheet.prototype, "product_sku__id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], daily_order_sheet.prototype, "order_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], daily_order_sheet.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], daily_order_sheet.prototype, "suplier_id", void 0);
    daily_order_sheet = __decorate([
        typeorm_1.Entity()
    ], daily_order_sheet);
    return daily_order_sheet;
}());
exports.daily_order_sheet = daily_order_sheet;
//# sourceMappingURL=daily_order_sheet.js.map