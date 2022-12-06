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
const recentlysongs_service_1 = require("./recentlysongs.service");
let RecentlySongsController = class RecentlySongsController {
    constructor(recentlySongsService) {
        this.recentlySongsService = recentlySongsService;
    }
    getAllSongs(request) {
        return this.recentlySongsService.getAllSongs(request.user);
    }
    async addSongToAlbum(id, request) {
        return this.recentlySongsService.addSongToRecentlySongs(id, request.user);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecentlySongsController.prototype, "getAllSongs", null);
__decorate([
    (0, common_1.Post)('addSongToRecentlySongs/:id'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RecentlySongsController.prototype, "addSongToAlbum", null);
RecentlySongsController = __decorate([
    (0, common_1.Controller)('recentlySongs'),
    __metadata("design:paramtypes", [recentlysongs_service_1.default])
], RecentlySongsController);
exports.default = RecentlySongsController;
//# sourceMappingURL=recentlysongs.controller.js.map