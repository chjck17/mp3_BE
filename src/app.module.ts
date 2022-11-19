import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
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
@Module({
  imports: [
    PostsModule,
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
   
    // LocalFilesModule,
    // RecentlyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
