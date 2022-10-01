import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { AlbumModule } from './album/album.module';
import { SongModule } from './songs/songs.module';
// import { PlaylistModule } from './userplaylist/userplaylists.module';
import { PlaylistModule } from './playlist/playlists.module';
import { UserPlaylistModule } from './userplaylist/userplaylists.module';
import { TestModule } from './test/tests.module';
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
        PORT: Joi.number(),
        synchronize: Joi.bool(),
      })
    }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    PlaylistModule,
    UserPlaylistModule,
    AlbumModule,
    SongModule,
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
