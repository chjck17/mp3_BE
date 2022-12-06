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
const album_entity_1 = require("./album.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const songs_service_1 = require("../songs/songs.service");
let AlbumsService = class AlbumsService {
    constructor(albumRepository, songsService) {
        this.albumRepository = albumRepository;
        this.songsService = songsService;
    }
    getAllAlbums() {
        return this.albumRepository.find({ relations: ['listSong'] });
    }
    async getAlbumById(id) {
        const album = await this.albumRepository.findOne(id);
        if (album) {
            return album;
        }
        throw new common_1.HttpException('Albums not found', common_1.HttpStatus.NOT_FOUND);
    }
    async addSongToAlbum(id, iduserPlaylist) {
        const album = new album_entity_1.default();
        const song = await this.songsService.getSongById(id);
        const playlis = await this.albumRepository.findOne(iduserPlaylist);
        album.listSong = [];
        if (album.listSong) {
            for (let i = 0; i < playlis.listSong.length; i++) {
                album.listSong.push(playlis.listSong[i]);
            }
        }
        album.listSong.push(song);
        album.id = playlis.id;
        album.name = playlis.name;
        album.state = playlis.state;
        album.description = playlis.description;
        return this.albumRepository.save(album);
    }
    async createAlbum(album) {
        const newAlbum = await this.albumRepository.create(album);
        await this.albumRepository.save(newAlbum);
        return newAlbum;
    }
    async updateAlbum(id, album) {
        await this.albumRepository.update(id, album);
        const updatedAlbum = await this.albumRepository.findOne(id);
        if (updatedAlbum) {
            return updatedAlbum;
        }
        throw new common_1.HttpException('Album not found', common_1.HttpStatus.NOT_FOUND);
    }
    async deleteAlbum(id) {
        const deleteResponse = await this.albumRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Album not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
AlbumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(album_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        songs_service_1.default])
], AlbumsService);
exports.default = AlbumsService;
//# sourceMappingURL=album.service.js.map