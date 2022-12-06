"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_definition_1 = require("./database.module-definition");
const pg_1 = require("pg");
const database_service_1 = require("./database.service");
let DatabaseDinamicModule = class DatabaseDinamicModule extends database_module_definition_1.ConfigurableDatabaseModule {
};
DatabaseDinamicModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({ imports: [
            database_module_definition_1.ConfigurableDatabaseModule,
        ],
        exports: [database_service_1.default],
        providers: [
            database_service_1.default,
            {
                provide: database_module_definition_1.CONNECTION_POOL,
                inject: [database_module_definition_1.DATABASE_OPTIONS],
                useFactory: (databaseOptions) => {
                    return new pg_1.Pool({
                        host: databaseOptions.host,
                        port: databaseOptions.port,
                        user: databaseOptions.user,
                        password: databaseOptions.password,
                        database: databaseOptions.database,
                    });
                },
            },
        ],
    })
], DatabaseDinamicModule);
exports.default = DatabaseDinamicModule;
//# sourceMappingURL=database.module.js.map