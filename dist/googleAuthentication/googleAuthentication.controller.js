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
exports.GoogleAuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const tokenVerification_dto_1 = require("./tokenVerification.dto");
const googleAuthentication_service_1 = require("./googleAuthentication.service");
let GoogleAuthenticationController = class GoogleAuthenticationController {
    constructor(googleAuthenticationService) {
        this.googleAuthenticationService = googleAuthenticationService;
    }
    async authenticate(tokenData, request) {
        const { accessTokenCookie, refreshTokenCookie, user, } = await this.googleAuthenticationService.authenticate(tokenData.token);
        request.res.setHeader('Set-Cookie', [
            accessTokenCookie,
            refreshTokenCookie,
        ]);
        return {
            user,
            token: accessTokenCookie,
            message: 'Login account success',
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tokenVerification_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], GoogleAuthenticationController.prototype, "authenticate", null);
GoogleAuthenticationController = __decorate([
    (0, common_1.Controller)('google-authentication'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [googleAuthentication_service_1.GoogleAuthenticationService])
], GoogleAuthenticationController);
exports.GoogleAuthenticationController = GoogleAuthenticationController;
//# sourceMappingURL=googleAuthentication.controller.js.map