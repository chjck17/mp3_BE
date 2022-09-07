import { Module } from '@nestjs/common';
import AlbumsController from './album.controller';
import AlbumsService from './album.service';
import Album from './album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Album])],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumModule {}
