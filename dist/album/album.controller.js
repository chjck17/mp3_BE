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
const album_service_1 = require("./album.service");
const createAlbum_dto_1 = require("./dto/createAlbum.dto");
const updateAlbum_dto_1 = require("./dto/updateAlbum.dto");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
let AlbumsController = class AlbumsController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    getAllAlbums() {
        return this.albumService.getAllAlbums();
    }
    getAlbumById(id) {
        return this.albumService.getAlbumById(id);
    }
    async addSongToAlbum(id, idAlbum) {
        return this.albumService.addSongToAlbum(id, idAlbum);
    }
    async createAlbum(album) {
        return this.albumService.createAlbum(album);
    }
    async updateAlbum(id, album) {
        return this.albumService.updateAlbum(id, album);
    }
    async deleteAlbum(id) {
        return this.albumService.deleteAlbum(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "getAllAlbums", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlbumsController.prototype, "getAlbumById", null);
__decorate([
    (0, common_1.Post)('addSongToAlbum/:id/:idAlbum'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idAlbum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "addSongToAlbum", null);
__decorate([
    (0, common_1.Post)('/createAlbum'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAlbum_dto_1.default]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "createAlbum", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateAlbum_dto_1.default]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "updateAlbum", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "deleteAlbum", null);
AlbumsController = __decorate([
    (0, common_1.Controller)('album'),
    __metadata("design:paramtypes", [album_service_1.default])
], AlbumsController);
exports.default = AlbumsController;
//# sourceMappingURL=album.controller.js.map