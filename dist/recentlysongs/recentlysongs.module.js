"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentlySongsModule = void 0;
const common_1 = require("@nestjs/common");
const recentlysongs_service_1 = require("./recentlysongs.service");
const recentlysong_entity_1 = require("./recentlysong.entity");
const recentlysongs_controller_1 = require("./recentlysongs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const song_entity_1 = require("../songs/song.entity");
const user_entity_1 = require("../users/user.entity");
const songs_service_1 = require("../songs/songs.service");
let RecentlySongsModule = class RecentlySongsModule {
};
RecentlySongsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([recentlysong_entity_1.default, user_entity_1.default, song_entity_1.default])],
        controllers: [recentlysongs_controller_1.default],
        providers: [songs_service_1.default, recentlysongs_service_1.default,],
    })
], RecentlySongsModule);
exports.RecentlySongsModule = RecentlySongsModule;
//# sourceMappingURL=recentlysongs.module.js.map