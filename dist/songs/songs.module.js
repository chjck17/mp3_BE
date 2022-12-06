"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongModule = void 0;
const common_1 = require("@nestjs/common");
const songs_controller_1 = require("./songs.controller");
const songs_service_1 = require("./songs.service");
const song_entity_1 = require("./song.entity");
const userplaylists_service_1 = require("../userplaylist/userplaylists.service");
const typeorm_1 = require("@nestjs/typeorm");
const userplaylist_entity_1 = require("../userplaylist/userplaylist.entity");
const category_entity_1 = require("../categories/category.entity");
let SongModule = class SongModule {
};
SongModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([song_entity_1.default, userplaylist_entity_1.default, category_entity_1.default])],
        controllers: [songs_controller_1.default],
        providers: [songs_service_1.default, userplaylists_service_1.default,],
    })
], SongModule);
exports.SongModule = SongModule;
//# sourceMappingURL=songs.module.js.map