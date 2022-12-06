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
exports.EmailConfirmationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const email_service_1 = require("../email/email.service");
const users_service_1 = require("../users/users.service");
let EmailConfirmationService = class EmailConfirmationService {
    constructor(jwtService, configService, emailService, usersService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.emailService = emailService;
        this.usersService = usersService;
    }
    sendVerificationLink(email) {
        const payload = { email };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_VERIFICATION_TOKEN_EXPIRATION_TIME')}s`
        });
        const url = `${this.configService.get('EMAIL_CONFIRMATION_URL')}/${token}`;
        const text = `Welcome to the application. To confirm the email address, click here: ${url}`;
        return this.emailService.sendMail({
            to: email,
            subject: 'Email confirmation',
            text,
        });
    }
    async resendConfirmationLink(userId) {
        const user = await this.usersService.getById(userId);
        if (user.isEmailConfirmed) {
            throw new common_1.BadRequestException('Email already confirmed');
        }
        await this.sendVerificationLink(user.email);
    }
    async confirmEmail(email) {
        const user = await this.usersService.getByEmail(email);
        if (user.isEmailConfirmed) {
            throw new common_1.BadRequestException('Email already confirmed');
        }
        await this.usersService.markEmailAsConfirmed(email);
    }
    async decodeConfirmationToken(token) {
        try {
            const payload = await this.jwtService.verify(token, {
                secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
            });
            if (typeof payload === 'object' && 'email' in payload) {
                return payload.email;
            }
            throw new common_1.BadRequestException();
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.name) === 'TokenExpiredError') {
                throw new common_1.BadRequestException('Email confirmation token expired');
            }
            throw new common_1.BadRequestException('Bad confirmation token');
        }
    }
};
EmailConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        email_service_1.default,
        users_service_1.UsersService])
], EmailConfirmationService);
exports.EmailConfirmationService = EmailConfirmationService;
//# sourceMappingURL=emailConfirmation.service.js.map