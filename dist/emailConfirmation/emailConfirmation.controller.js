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
exports.EmailConfirmationController = void 0;
const common_1 = require("@nestjs/common");
const emailConfirmation_service_1 = require("./emailConfirmation.service");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
let EmailConfirmationController = class EmailConfirmationController {
    constructor(emailConfirmationService) {
        this.emailConfirmationService = emailConfirmationService;
    }
    async confirm(token) {
        const email = await this.emailConfirmationService.decodeConfirmationToken(token);
        await this.emailConfirmationService.confirmEmail(email);
        return token;
    }
    async resendConfirmationLink(request) {
        await this.emailConfirmationService.resendConfirmationLink(request.user.id);
    }
};
__decorate([
    (0, common_1.Get)('confirm/:token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmailConfirmationController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)('resend-confirmation-link'),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailConfirmationController.prototype, "resendConfirmationLink", null);
EmailConfirmationController = __decorate([
    (0, common_1.Controller)('email-confirmation'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [emailConfirmation_service_1.EmailConfirmationService])
], EmailConfirmationController);
exports.EmailConfirmationController = EmailConfirmationController;
//# sourceMappingURL=emailConfirmation.controller.js.map