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
var sub_community_1 = require("./sub_community");
var community = (function () {
    function community() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], community.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 128
        }),
        __metadata("design:type", String)
    ], community.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            length: 255
        }),
        __metadata("design:type", String)
    ], community.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], community.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({
            length: 128
        }),
        __metadata("design:type", String)
    ], community.prototype, "locality", void 0);
    __decorate([
        typeorm_1.Column({
            length: 128
        }),
        __metadata("design:type", String)
    ], community.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({
            length: 128
        }),
        __metadata("design:type", String)
    ], community.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column({
            length: 128
        }),
        __metadata("design:type", String)
    ], community.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], community.prototype, "pincode", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return sub_community_1.sub_community; }, function (sub_community) { return sub_community.community_id; }, {
            cascadeInsert: true,
            cascadeUpdate: true
        }),
        __metadata("design:type", Array)
    ], community.prototype, "sub_community", void 0);
    community = __decorate([
        typeorm_1.Entity()
    ], community);
    return community;
}());
exports.community = community;
//# sourceMappingURL=community.js.map