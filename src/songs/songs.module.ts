import { Module } from '@nestjs/common';
import SongsController from './songs.controller';
import SongsService from './songs.service';
import Song from './song.entity';
import UserPlaylistsService from 'src/userplaylist/userplaylists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import Category from 'src/categories/category.entity';
import RecentlySongsController from 'src/recentlysongs/recentlysongs.controller';
import RecentlySong from 'src/recentlysongs/recentlysong.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Song,UserPlaylist,Category])],
  controllers: [SongsController],
  providers: [SongsService,UserPlaylistsService,],
})
export class SongModule {}
