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
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./authentication.service");
const register_dto_1 = require("./dto/register.dto");
const localAuthentication_guard_1 = require("./localAuthentication.guard");
const jwt_authentication_guard_1 = require("./jwt-authentication.guard");
const config_1 = require("@nestjs/config");
const emailConfirmation_service_1 = require("../emailConfirmation/emailConfirmation.service");
const repassword_dto_1 = require("./dto/repassword.dto");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService, configService, emailConfirmationService) {
        this.authenticationService = authenticationService;
        this.configService = configService;
        this.emailConfirmationService = emailConfirmationService;
    }
    async register(registrationData) {
        const user = this.authenticationService.register(registrationData);
        await this.emailConfirmationService.sendVerificationLink(registrationData.email);
        return user;
    }
    async logIn(request, response) {
        const { user } = request;
        const token = this.authenticationService.getCookieWithJwtToken(user.id);
        delete user.password;
        response.setHeader('Set-Cookie', `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`);
        return response.send({
            user,
            token: token,
            message: 'Login account success',
        });
    }
    async logOut(response) {
        response.setHeader('Set-Cookie', this.authenticationService.getCookieForLogOut());
        return response.sendStatus(200);
    }
    authenticate(request) {
        const user = request.user;
        return user;
    }
    async rePassword(request, rePassword) {
        await this.authenticationService.rePassword(request.user, rePassword);
    }
    async forgotPassword(request) {
        const pass = Math.floor(Math.random() * 10000000);
        const passs = String(pass);
        await this.authenticationService.forgotPassword(request.user, { password: passs });
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.default]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "register", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(localAuthentication_guard_1.LocalAuthenticationGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "logIn", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "logOut", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthenticationController.prototype, "authenticate", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)('rePassword'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, repassword_dto_1.default]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "rePassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)('forgotPassword'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "forgotPassword", null);
AuthenticationController = __decorate([
    (0, common_1.Controller)('authentication'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        config_1.ConfigService,
        emailConfirmation_service_1.EmailConfirmationService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map