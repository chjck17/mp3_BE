import { Module } from '@nestjs/common';
import AlbumsController from './album.controller';
import AlbumsService from './album.service';
import Album from './album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Song from 'src/songs/song.entity';
import SongsService from 'src/songs/songs.service';
@Module({
  imports: [TypeOrmModule.forFeature([Album,Song])],
  controllers: [AlbumsController],
  providers: [AlbumsService,SongsService],
})
export class AlbumModule {}
