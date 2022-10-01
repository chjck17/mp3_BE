import { Module } from '@nestjs/common';

// import Playlist from './userplaylist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Test from './test.entity';
import TestController from './tests.controller';
import TestService from './tests.service';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import UserPlaylistsService from 'src/userplaylist/userplaylists.service';
import Playlist from 'src/playlist/playlist.entity';
import PlaylistsService from 'src/playlist/playlists.service';
@Module({
  imports: [TypeOrmModule.forFeature([Test,UserPlaylist,Playlist])],
  controllers: [TestController],
  providers: [TestService,UserPlaylistsService,PlaylistsService],
})
export class TestModule {}
