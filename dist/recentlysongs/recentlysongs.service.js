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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const recentlysong_entity_1 = require("./recentlysong.entity");
const songs_service_1 = require("../songs/songs.service");
let RecentlySongsService = class RecentlySongsService {
    constructor(recentlySongsRepository, songsService) {
        this.recentlySongsRepository = recentlySongsRepository;
        this.songsService = songsService;
    }
    async addSongToRecentlySongs(id, user) {
        const album = new recentlysong_entity_1.default();
        const song = await this.songsService.getSongById(id);
        const songs = await this.recentlySongsRepository.find({ relations: ['user'] });
        const playlis = songs.filter(item => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.user) === null || _a === void 0 ? void 0 : _a.id) == user.id; });
        album.listSong = [];
        if (album.listSong) {
            if (playlis[0].listSong.length >= 8)
                for (let i = 1; i < 8; i++) {
                    album.listSong.push(playlis[0].listSong[i]);
                }
            else {
                for (let i = 0; i < playlis[0].listSong.length; i++) {
                    album.listSong.push(playlis[0].listSong[i]);
                }
            }
        }
        album.listSong.push(song);
        album.id = playlis[0].id;
        return this.recentlySongsRepository.save(album);
    }
    async getAllSongs(user) {
        const song = await this.recentlySongsRepository.find({ relations: ['user'] });
        const recentlysong = song.filter(item => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.user) === null || _a === void 0 ? void 0 : _a.id) == user.id; });
        return recentlysong;
    }
    async deleteSong(id) {
        const deleteResponse = await this.recentlySongsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Song not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
RecentlySongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recentlysong_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        songs_service_1.default])
], RecentlySongsService);
exports.default = RecentlySongsService;
//# sourceMappingURL=recentlysongs.service.js.map