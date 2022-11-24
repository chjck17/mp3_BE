import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserPlaylist from './userplaylist.entity';
import UserPlaylistsService from './userplaylists.service';
import UserPlaylistsController from './userplaylists.controller';
import User from 'src/users/user.entity';
import SongsService from 'src/songs/songs.service';
import Song from 'src/songs/song.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPlaylist,User,Song])],
  controllers: [UserPlaylistsController],
  providers: [UserPlaylistsService,UsersService,SongsService],
})
export class UserPlaylistModule {}
