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
var manufacture = (function () {
    function manufacture() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], manufacture.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 500
        }),
        __metadata("design:type", String)
    ], manufacture.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], manufacture.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], manufacture.prototype, "comments", void 0);
    manufacture = __decorate([
        typeorm_1.Entity()
    ], manufacture);
    return manufacture;
}());
exports.manufacture = manufacture;
//# sourceMappingURL=manufacture.js.map