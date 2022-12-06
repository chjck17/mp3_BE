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
const userplaylist_entity_1 = require("./userplaylist.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const songs_service_1 = require("../songs/songs.service");
let UserPlaylistsService = class UserPlaylistsService {
    constructor(userPlaylistRepository, songsService) {
        this.userPlaylistRepository = userPlaylistRepository;
        this.songsService = songsService;
    }
    getAllUserPlaylists() {
        return this.userPlaylistRepository.find({ relations: ['user'] });
    }
    async getPostById(id) {
        const post = await this.userPlaylistRepository.find({
            relations: ['user'],
        });
        const userPlaylist = post.filter(item => item.user.id == id);
        return userPlaylist;
    }
    async getPlayListById(id) {
        const post = await this.userPlaylistRepository.find({
            relations: ['user'],
        });
        const userPlaylist = post.filter(item => item.id == id);
        return userPlaylist;
    }
    async createUserPlaylist(userPlaylist, user) {
        const newUserPlaylist = await this.userPlaylistRepository.create(Object.assign(Object.assign({}, userPlaylist), { user: user }));
        await this.userPlaylistRepository.save(newUserPlaylist);
        return newUserPlaylist;
    }
    async addSongToUserPlayList(id, iduserPlaylist) {
        const userPlaylist = new userplaylist_entity_1.default();
        const song = await this.songsService.getSongById(id);
        const userPlaylis = await this.userPlaylistRepository.findOne(iduserPlaylist);
        userPlaylist.listSong = [];
        if (userPlaylist.listSong) {
            for (let i = 0; i < userPlaylis.listSong.length; i++) {
                userPlaylist.listSong.push(userPlaylis.listSong[i]);
            }
        }
        userPlaylist.listSong.push(song);
        userPlaylist.id = userPlaylis.id;
        userPlaylist.name = userPlaylis.name;
        userPlaylist.state = userPlaylis.state;
        userPlaylist.user = userPlaylis.user;
        return this.userPlaylistRepository.save(userPlaylist);
    }
    async getSongToUserPlayList() {
        return this.userPlaylistRepository.find({ relations: ['listSong'] });
    }
};
UserPlaylistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userplaylist_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        songs_service_1.default])
], UserPlaylistsService);
exports.default = UserPlaylistsService;
//# sourceMappingURL=userplaylists.service.js.map