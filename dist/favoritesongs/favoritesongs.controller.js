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
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
const favoritesongs_service_1 = require("./favoritesongs.service");
let FavoriteSongsController = class FavoriteSongsController {
    constructor(favoriteSongsService) {
        this.favoriteSongsService = favoriteSongsService;
    }
    getAllSongs(request) {
        return this.favoriteSongsService.getAllSongs(request.user);
    }
    async addSongToFavorite(id, request) {
        return this.favoriteSongsService.addSongToFavoriteSongs(id, request.user);
    }
    async deleteSongFromFavorite(id, request) {
        return this.favoriteSongsService.deleteSong(id, request.user);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavoriteSongsController.prototype, "getAllSongs", null);
__decorate([
    (0, common_1.Post)('addSongToFavoriteSongs/:uuid'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FavoriteSongsController.prototype, "addSongToFavorite", null);
__decorate([
    (0, common_1.Delete)('deleteSongFromFavoriteSongs/:id'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FavoriteSongsController.prototype, "deleteSongFromFavorite", null);
FavoriteSongsController = __decorate([
    (0, common_1.Controller)('favoriteSongs'),
    __metadata("design:paramtypes", [favoritesongs_service_1.default])
], FavoriteSongsController);
exports.default = FavoriteSongsController;
//# sourceMappingURL=favoritesongs.controller.js.map