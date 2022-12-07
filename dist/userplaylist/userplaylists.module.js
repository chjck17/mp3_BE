"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPlaylistModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const userplaylist_entity_1 = require("./userplaylist.entity");
const userplaylists_service_1 = require("./userplaylists.service");
const userplaylists_controller_1 = require("./userplaylists.controller");
const user_entity_1 = require("../users/user.entity");
const songs_service_1 = require("../songs/songs.service");
const song_entity_1 = require("../songs/song.entity");
const users_service_1 = require("../users/users.service");
let UserPlaylistModule = class UserPlaylistModule {
};
UserPlaylistModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([userplaylist_entity_1.default, user_entity_1.default, song_entity_1.default])],
        controllers: [userplaylists_controller_1.default],
        providers: [userplaylists_service_1.default, users_service_1.UsersService, songs_service_1.default],
    })
], UserPlaylistModule);
exports.UserPlaylistModule = UserPlaylistModule;
//# sourceMappingURL=userplaylists.module.js.map