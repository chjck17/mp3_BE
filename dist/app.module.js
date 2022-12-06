"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const posts_module_1 = require("./posts/posts.module");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const database_module_1 = require("./database/database.module");
const authentication_module_1 = require("./authentication/authentication.module");
const users_module_1 = require("./users/users.module");
const album_module_1 = require("./album/album.module");
const songs_module_1 = require("./songs/songs.module");
const userplaylists_module_1 = require("./userplaylist/userplaylists.module");
const categories_module_1 = require("./categories/categories.module");
const recentlysongs_module_1 = require("./recentlysongs/recentlysongs.module");
const emailConfirmation_module_1 = require("./emailConfirmation/emailConfirmation.module");
const email_module_1 = require("./email/email.module");
const googleAuthentication_module_1 = require("./googleAuthentication/googleAuthentication.module");
const favoritesongs_module_1 = require("./favoritesongs/favoritesongs.module");
const songs_module_2 = require("./songsdinamic/songs.module");
const database_module_2 = require("./databasedinamic/database.module");
const database_module_definition_1 = require("./databasedinamic/database.module-definition");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            posts_module_1.PostsModule,
            posts_module_1.PostsModule,
            database_module_2.default.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    user: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DB'),
                }),
            }),
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DB: Joi.string().required(),
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRATION_TIME: Joi.string().required(),
                    JWT_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
                    JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: Joi.string().required(),
                    JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
                    JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
                    EMAIL_CONFIRMATION_URL: Joi.string().required(),
                    EMAIL_SERVICE: Joi.string().required(),
                    EMAIL_USER: Joi.string().required(),
                    EMAIL_PASSWORD: Joi.string().required(),
                    GOOGLE_AUTH_CLIENT_ID: Joi.string().required(),
                    GOOGLE_AUTH_CLIENT_SECRET: Joi.string().required(),
                    PORT: Joi.number(),
                    synchronize: Joi.bool(),
                }),
            }),
            database_module_1.DatabaseModule,
            authentication_module_1.AuthenticationModule,
            users_module_1.UsersModule,
            categories_module_1.CategoryModule,
            userplaylists_module_1.UserPlaylistModule,
            album_module_1.AlbumModule,
            songs_module_1.SongModule,
            recentlysongs_module_1.RecentlySongsModule,
            email_module_1.EmailModule,
            emailConfirmation_module_1.EmailConfirmationModule,
            googleAuthentication_module_1.GoogleAuthenticationModule,
            favoritesongs_module_1.FavoriteSongsModule,
            songs_module_2.SongDinamicModule,
            database_module_definition_1.ConfigurableDatabaseModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map