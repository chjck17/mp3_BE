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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const config_1 = require("@nestjs/config");
const googleapis_1 = require("googleapis");
const authentication_service_1 = require("../authentication/authentication.service");
let GoogleAuthenticationService = class GoogleAuthenticationService {
    constructor(usersService, configService, authenticationService) {
        this.usersService = usersService;
        this.configService = configService;
        this.authenticationService = authenticationService;
        const clientID = this.configService.get('GOOGLE_AUTH_CLIENT_ID');
        const clientSecret = this.configService.get('GOOGLE_AUTH_CLIENT_SECRET');
        this.oauthClient = new googleapis_1.google.auth.OAuth2(clientID, clientSecret);
    }
    async getUserData(token) {
        const userInfoClient = googleapis_1.google.oauth2('v2').userinfo;
        this.oauthClient.setCredentials({
            access_token: token,
        });
        const userInfoResponse = await userInfoClient.get({
            auth: this.oauthClient,
        });
        return userInfoResponse.data;
    }
    async getCookiesForUser(user) {
        const accessTokenCookie = this.authenticationService.getCookieWithJwtAccessToken(user.id);
        const { cookie: refreshTokenCookie, token: refreshToken, } = this.authenticationService.getCookieWithJwtRefreshToken(user.id);
        await this.usersService.setCurrentRefreshToken(refreshToken, user.id);
        return { accessTokenCookie, refreshTokenCookie };
    }
    async handleRegisteredUser(user) {
        if (!user.isRegisteredWithGoogle) {
            throw new common_1.UnauthorizedException();
        }
        const { accessTokenCookie, refreshTokenCookie, } = await this.getCookiesForUser(user);
        return { accessTokenCookie, refreshTokenCookie, user };
    }
    async registerUser(token, email) {
        const userData = await this.getUserData(token);
        const name = userData.name;
        const user = await this.usersService.createWithGoogle(email, name);
        return this.handleRegisteredUser(user);
    }
    async authenticate(token) {
        const tokenInfo = await this.oauthClient.getTokenInfo(token);
        const email = tokenInfo.email;
        try {
            const user = await this.usersService.getByEmail(email);
            return this.handleRegisteredUser(user);
        }
        catch (error) {
            if (error.status !== 404) {
                throw new error();
            }
            return this.registerUser(token, email);
        }
    }
};
GoogleAuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService,
        authentication_service_1.AuthenticationService])
], GoogleAuthenticationService);
exports.GoogleAuthenticationService = GoogleAuthenticationService;
//# sourceMappingURL=googleAuthentication.service.js.map