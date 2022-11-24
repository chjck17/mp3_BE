import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Song from 'src/songs/song.entity';
import User from 'src/users/user.entity';
import SongsService from 'src/songs/songs.service';
import FavoriteSongsService from './favoritesongs.service';
import FavoriteSongsController from './favoritesongs.controller';
import FavoriteSong from './favoritesong.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([FavoriteSong,User,Song])],
  controllers: [FavoriteSongsController],
  providers: [SongsService,FavoriteSongsService,],
})
export class FavoriteSongsModule {}
