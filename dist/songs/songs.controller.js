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
const songs_service_1 = require("./songs.service");
const createSong_dto_1 = require("./dto/createSong.dto");
const updateSong_dto_1 = require("./dto/updateSong.dto");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
let SongsController = class SongsController {
    constructor(songsService) {
        this.songsService = songsService;
    }
    getAllSongs() {
        return this.songsService.getAllSongs();
    }
    getAllSongsWithCategory() {
        return this.songsService.getAllSongsWithCategory();
    }
    getSongById(id) {
        return this.songsService.getSongById(id);
    }
    async createSong(req, song) {
        return this.songsService.createSong(song, req.user);
    }
    async updateSong(req, id, song) {
        return this.songsService.updateSong(id, song, req.user);
    }
    async deleteSong(id) {
        return this.songsService.deleteSong(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "getAllSongs", null);
__decorate([
    (0, common_1.Get)('/category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "getAllSongsWithCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "getSongById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createSong_dto_1.default]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "createSong", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateSong_dto_1.default]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "updateSong", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "deleteSong", null);
SongsController = __decorate([
    (0, common_1.Controller)('song'),
    __metadata("design:paramtypes", [songs_service_1.default])
], SongsController);
exports.default = SongsController;
//# sourceMappingURL=songs.controller.js.map