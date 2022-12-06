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
const typeorm_1 = require("typeorm");
const userplaylist_entity_1 = require("../userplaylist/userplaylist.entity");
const recentlysong_entity_1 = require("../recentlysongs/recentlysong.entity");
const class_transformer_1 = require("class-transformer");
const favoritesong_entity_1 = require("../favoritesongs/favoritesong.entity");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isEmailConfirmed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userplaylist_entity_1.default, (userPlaylist) => userPlaylist.user),
    __metadata("design:type", Array)
], User.prototype, "userPlaylist", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => recentlysong_entity_1.default, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", recentlysong_entity_1.default)
], User.prototype, "recentlySongs", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => favoritesong_entity_1.default, {
        eager: true,
        cascade: true
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", favoritesong_entity_1.default)
], User.prototype, "favoriteSongs", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isRegisteredWithGoogle", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "currentHashedRefreshToken", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.default = User;
//# sourceMappingURL=user.entity.js.map