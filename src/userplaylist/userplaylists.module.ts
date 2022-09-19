import { Module } from '@nestjs/common';

// import Playlist from './userplaylist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import PlaylistsController from './userplaylists.controller';
// import PlaylistsService from './userplaylists.service';
// import Song from 'src/songs/song.entity';
// import SongsService from 'src/songs/songs.service';
import Playlist from 'src/playlist/playlist.entity';
import UserPlaylist from './userplaylist.entity';
import UserPlaylistsService from './userplaylists.service';
import PlaylistsService from 'src/playlist/playlists.service';
import UserPlaylistsController from './userplaylists.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Playlist,UserPlaylist])],
  controllers: [UserPlaylistsController],
  providers: [PlaylistsService,UserPlaylistsService],
})
export class UserPlaylistModule {}
