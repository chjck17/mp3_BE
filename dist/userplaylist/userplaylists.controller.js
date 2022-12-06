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
const userplaylists_service_1 = require("./userplaylists.service");
const createUserPlayList_dto_1 = require("./dto/createUserPlayList.dto");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
const users_service_1 = require("../users/users.service");
let UserPlaylistsController = class UserPlaylistsController {
    constructor(userPlaylistsService, usersService) {
        this.userPlaylistsService = userPlaylistsService;
        this.usersService = usersService;
    }
    getUserPlayList(req) {
        return this.usersService.getUserPlayList(req.user);
    }
    getUserPlayListDetail(req, id) {
        return this.usersService.getUserPlayListDetail(req.user, id);
    }
    async addsongToUserPlayList(id, idplaylist) {
        return this.userPlaylistsService.addSongToUserPlayList(id, idplaylist);
    }
    async getSongToUserPlayList() {
        return this.userPlaylistsService.getSongToUserPlayList();
    }
    async createUserPlaylist(userPlaylist, req) {
        return this.userPlaylistsService.createUserPlaylist(userPlaylist, req.user);
    }
};
__decorate([
    (0, common_1.Get)('/getUserPlayList'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserPlaylistsController.prototype, "getUserPlayList", null);
__decorate([
    (0, common_1.Get)('/getUserPlayList/:id'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UserPlaylistsController.prototype, "getUserPlayListDetail", null);
__decorate([
    (0, common_1.Post)('addSongToUserPlayList/:id/:idplaylist'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('idplaylist')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserPlaylistsController.prototype, "addsongToUserPlayList", null);
__decorate([
    (0, common_1.Post)('/getSongToUserPlayList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPlaylistsController.prototype, "getSongToUserPlayList", null);
__decorate([
    (0, common_1.Post)('/createUserPlayList'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserPlayList_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], UserPlaylistsController.prototype, "createUserPlaylist", null);
UserPlaylistsController = __decorate([
    (0, common_1.Controller)('userplaylist'),
    __metadata("design:paramtypes", [userplaylists_service_1.default,
        users_service_1.UsersService])
], UserPlaylistsController);
exports.default = UserPlaylistsController;
//# sourceMappingURL=userplaylists.controller.js.map