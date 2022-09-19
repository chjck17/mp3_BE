import { Module } from '@nestjs/common';
import PlaylistsController from './playlists.controller';
import PlaylistsService from './playlists.service';
import Playlist from './playlist.entity';
import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import UserPlaylistsService from 'src/userplaylist/userplaylists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Playlist,UserPlaylist])],
  controllers: [PlaylistsController],
  providers: [PlaylistsService,UserPlaylistsService],
})
export class PlaylistModule {}
