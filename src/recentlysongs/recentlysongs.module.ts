import { Module } from '@nestjs/common';
import RecentlySongsService from './recentlysongs.service';

import RecentlySong from './recentlysong.entity';
import RecentlySongsController from './recentlysongs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Song from 'src/songs/song.entity';
import User from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import SongsService from 'src/songs/songs.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([RecentlySong,User,Song])],
  controllers: [RecentlySongsController],
  providers: [SongsService,RecentlySongsService],
})
export class RecentlySongsModule {}
