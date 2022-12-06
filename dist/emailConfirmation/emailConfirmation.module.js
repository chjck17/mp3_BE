"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const email_module_1 = require("../email/email.module");
const typeorm_1 = require("@nestjs/typeorm");
const email_service_1 = require("../email/email.service");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const emailConfirmation_controller_1 = require("./emailConfirmation.controller");
const emailConfirmation_service_1 = require("./emailConfirmation.service");
const user_entity_1 = require("../users/user.entity");
let EmailConfirmationModule = class EmailConfirmationModule {
};
EmailConfirmationModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, email_module_1.EmailModule, jwt_1.JwtModule.register({}), users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.default])],
        providers: [emailConfirmation_service_1.EmailConfirmationService, users_service_1.UsersService, email_service_1.default],
        exports: [emailConfirmation_service_1.EmailConfirmationService],
        controllers: [emailConfirmation_controller_1.EmailConfirmationController]
    })
], EmailConfirmationModule);
exports.EmailConfirmationModule = EmailConfirmationModule;
//# sourceMappingURL=emailConfirmation.module.js.map