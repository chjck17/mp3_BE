import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { AlbumModule } from './album/album.module';
import { SongModule } from './songs/songs.module';
import { UserPlaylistModule } from './userplaylist/userplaylists.module';
import { CategoryModule } from './categories/categories.module';
import { RecentlySongsModule } from './recentlysongs/recentlysongs.module';
import { EmailConfirmationModule } from './emailConfirmation/emailConfirmation.module';
import { EmailModule } from './email/email.module';
import { GoogleAuthenticationModule } from './googleAuthentication/googleAuthentication.module';
import { FavoriteSongsModule } from './favoritesongs/favoritesongs.module';
import { SongDinamicModule } from './songsdinamic/songs.module';
import DatabaseDinamicModule from './databasedinamic/database.module';
import { ConfigurableDatabaseModule } from './databasedinamic/database.module-definition';
@Module({
  imports: [
    PostsModule,    
    PostsModule,
    DatabaseDinamicModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
      }),
    }),

    ConfigModule.forRoot({
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
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    CategoryModule,
    UserPlaylistModule,
    AlbumModule,
    SongModule,
    RecentlySongsModule,
    EmailModule,
    EmailConfirmationModule,
    GoogleAuthenticationModule,
     FavoriteSongsModule,
     SongDinamicModule
     ,ConfigurableDatabaseModule
    // LocalFilesModule,
    // RecentlyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
