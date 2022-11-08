import { Module } from '@nestjs/common';
import SongsController from './recentlysongs.controller';
import SongsService from './recentlysongs.service';
import Song from './recentlysong.entity';
import UserPlaylistsService from 'src/userplaylist/userplaylists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import Category from 'src/categories/category.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Song,UserPlaylist,Category])],
  controllers: [SongsController],
  providers: [SongsService,UserPlaylistsService],
})
export class SongModule {}
