import { Module } from '@nestjs/common';
import SongsController from './songs.controller';
import SongsService from './songs.service';
import Song from './song.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import PlaylistsService from 'src/userplaylist/userplaylists.service';
// import Playlist from 'src/userplaylist/userplaylist.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongsController],
  providers: [SongsService,],
})
export class SongModule {}
