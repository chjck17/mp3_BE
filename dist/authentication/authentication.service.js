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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const postgresErrorCode_enum_1 = require("../database/postgresErrorCode.enum");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const recentlysong_entity_1 = require("../recentlysongs/recentlysong.entity");
const favoritesong_entity_1 = require("../favoritesongs/favoritesong.entity");
const email_service_1 = require("../email/email.service");
let AuthenticationService = class AuthenticationService {
    constructor(usersService, jwtService, configService, emailService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.emailService = emailService;
    }
    async register(registrationData) {
        const recentlySong = new recentlysong_entity_1.default();
        recentlySong.listSong = [];
        const favoriteSong = new favoritesong_entity_1.default();
        favoriteSong.listSong = [];
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const createdUser = await this.usersService.create(Object.assign(Object.assign({}, registrationData), { password: hashedPassword, recentlySongs: recentlySong, favoriteSongs: favoriteSong }));
            createdUser.password = undefined;
            return createdUser;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCode_enum_1.default.UniqueViolation) {
                throw new common_1.HttpException('User with that email already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getCookieWithJwtToken(userId) {
        const payload = { userId };
        const token = this.jwtService.sign(payload);
        return token;
    }
    getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0;`;
    }
    async getAuthenticatedUser(email, plainTextPassword) {
        try {
            const user = await this.usersService.getByEmail(email);
            await this.verifyPassword(plainTextPassword, user.password);
            return user;
        }
        catch (error) {
            throw new common_1.HttpException('Wrong credentials provided', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async verifyPassword(plainTextPassword, hashedPassword) {
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
        if (!isPasswordMatching) {
            throw new common_1.HttpException('Wrong credentials provided', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getCookieWithJwtAccessToken(userId, isSecondFactorAuthenticated = false) {
        const payload = { userId, isSecondFactorAuthenticated };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
        });
        return token;
    }
    getCookieWithJwtRefreshToken(userId) {
        const payload = { userId };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
        });
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}`;
        return {
            cookie,
            token,
        };
    }
    async forgotPassword(email, pass) {
        const text = pass;
        await this.emailService.sendMail({
            to: email.email,
            subject: 'Email confirmation',
            text,
        });
        const hashedPassword = await bcrypt.hash(pass, 10);
        try {
            const userForget = await this.usersService.getByEmail(email.email);
            const createdUser = await this.usersService.rePassWord(userForget.id, {
                password: hashedPassword,
            });
            return createdUser;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCode_enum_1.default.UniqueViolation) {
                throw new common_1.HttpException('User with that email already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async rePassword(user, pass) {
        console.log(pass);
        const isPasswordMatching = await bcrypt.compare(pass.congirmationPassword, user.password);
        const hashedPassword = await bcrypt.hash(pass.password, 10);
        if (isPasswordMatching) {
            try {
                const createdUser = await this.usersService.rePassWord(user.id, {
                    password: hashedPassword,
                });
                return createdUser;
            }
            catch (error) {
                if ((error === null || error === void 0 ? void 0 : error.code) === postgresErrorCode_enum_1.default.UniqueViolation) {
                    throw new common_1.HttpException('User with that email already exists', common_1.HttpStatus.BAD_REQUEST);
                }
                throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        else {
            throw new common_1.HttpException('wrong congirmation password', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService,
        email_service_1.default])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map