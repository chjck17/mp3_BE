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
const songs_service_1 = require("../songs/songs.service");
const favoritesong_entity_1 = require("./favoritesong.entity");
let FavoriteSongsService = class FavoriteSongsService {
    constructor(favoriteSongsRepository, songsService) {
        this.favoriteSongsRepository = favoriteSongsRepository;
        this.songsService = songsService;
    }
    async addSongToFavoriteSongs(id, user) {
        const favorite = new favoritesong_entity_1.default();
        const song = await this.songsService.getSongById(id);
        const songs = await this.favoriteSongsRepository.find({
            relations: ['user'],
        });
        const playlis = songs.filter(item => item.user.id == user.id);
        favorite.listSong = [];
        if (playlis[0].listSong) {
            for (let i = 0; i < playlis[0].listSong.length; i++) {
                favorite.listSong.push(playlis[0].listSong[i]);
            }
        }
        favorite.listSong.push(song);
        favorite.id = playlis[0].id;
        return this.favoriteSongsRepository.save(favorite);
    }
    async getAllSongs(user) {
        const song = await this.favoriteSongsRepository.find({
            relations: ['user'],
        });
        const recentlysong = song.filter(item => item.user.id == user.id);
        return recentlysong[0].listSong;
    }
    async deleteSong(id, user) {
        const songs = await this.favoriteSongsRepository.find({
            relations: ['user'],
        });
        const playlis = songs.filter(item => item.user.id == user.id);
        if (playlis[0].listSong) {
            for (let i = 0; i < playlis[0].listSong.length; i++) {
                if (playlis[0].listSong[i].id == id) {
                    playlis[0].listSong.splice(i, 1);
                }
            }
        }
        return this.favoriteSongsRepository.save(playlis[0]);
    }
};
FavoriteSongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favoritesong_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        songs_service_1.default])
], FavoriteSongsService);
exports.default = FavoriteSongsService;
//# sourceMappingURL=favoritesongs.service.js.map