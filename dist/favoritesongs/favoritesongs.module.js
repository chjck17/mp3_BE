"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteSongsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const song_entity_1 = require("../songs/song.entity");
const user_entity_1 = require("../users/user.entity");
const songs_service_1 = require("../songs/songs.service");
const favoritesongs_service_1 = require("./favoritesongs.service");
const favoritesongs_controller_1 = require("./favoritesongs.controller");
const favoritesong_entity_1 = require("./favoritesong.entity");
let FavoriteSongsModule = class FavoriteSongsModule {
};
FavoriteSongsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favoritesong_entity_1.default, user_entity_1.default, song_entity_1.default])],
        controllers: [favoritesongs_controller_1.default],
        providers: [songs_service_1.default, favoritesongs_service_1.default],
    })
], FavoriteSongsModule);
exports.FavoriteSongsModule = FavoriteSongsModule;
//# sourceMappingURL=favoritesongs.module.js.map