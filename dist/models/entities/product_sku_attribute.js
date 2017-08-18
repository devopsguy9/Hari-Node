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
var product_sku_attribute = (function () {
    function product_sku_attribute() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], product_sku_attribute.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], product_sku_attribute.prototype, "product_sku_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], product_sku_attribute.prototype, "product_attribute_id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 80
        }),
        __metadata("design:type", String)
    ], product_sku_attribute.prototype, "attribute_value", void 0);
    product_sku_attribute = __decorate([
        typeorm_1.Entity()
    ], product_sku_attribute);
    return product_sku_attribute;
}());
exports.product_sku_attribute = product_sku_attribute;
//# sourceMappingURL=product_sku_attribute.js.map