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
const song_entity_1 = require("./song.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const createSongWithCategory_dto_1 = require("./dto/createSongWithCategory.dto");
let SongsService = class SongsService {
    constructor(songsRepository) {
        this.songsRepository = songsRepository;
    }
    getAllSongs() {
        return this.songsRepository.find();
    }
    getAllSongsWithCategory() {
        return this.songsRepository.find({ relations: ['categories'] });
    }
    async getSongById(id) {
        const song = await this.songsRepository.findOne(id, { relations: ['categories'] });
        if (song) {
            return song;
        }
        throw new common_1.HttpException('Song not found', common_1.HttpStatus.NOT_FOUND);
    }
    async createSong(song, user) {
        const categories = [];
        const object = { id: "" };
        if (song.category) {
            for (let i = 0; i < song.category.length; i++) {
                categories.push({ id: song.category[i] });
            }
        }
        const crateSong = new createSongWithCategory_dto_1.default;
        crateSong.author = song.author;
        crateSong.description = song.description;
        crateSong.image = song.image;
        crateSong.link = song.link;
        crateSong.name = song.name;
        if (user.role == 'admin') {
            const newSong = await this.songsRepository.create(Object.assign(Object.assign({}, crateSong), { categories }));
            await this.songsRepository.save(newSong);
            return newSong;
        }
        throw new common_1.UnauthorizedException;
    }
    async updateSong(id, song, user) {
        if (user.role == 'admin') {
            await this.songsRepository.update(id, song);
            const updatedSong = await this.songsRepository.findOne(id);
            if (updatedSong) {
                return updatedSong;
            }
            throw new common_1.HttpException('Song not found', common_1.HttpStatus.NOT_FOUND);
        }
        throw new common_1.UnauthorizedException;
    }
    async deleteSong(id) {
        const deleteResponse = await this.songsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Song not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
SongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(song_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SongsService);
exports.default = SongsService;
//# sourceMappingURL=songs.service.js.map