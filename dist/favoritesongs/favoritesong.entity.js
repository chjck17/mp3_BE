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
const song_entity_1 = require("../songs/song.entity");
const user_entity_1 = require("../users/user.entity");
let FavoriteSong = class FavoriteSong {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FavoriteSong.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => song_entity_1.default, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], FavoriteSong.prototype, "listSong", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.default, (user) => user.favoriteSongs),
    __metadata("design:type", user_entity_1.default)
], FavoriteSong.prototype, "user", void 0);
FavoriteSong = __decorate([
    (0, typeorm_1.Entity)()
], FavoriteSong);
exports.default = FavoriteSong;
//# sourceMappingURL=favoritesong.entity.js.map