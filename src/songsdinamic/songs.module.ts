import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import SongsController from './songs.controller';
import SongsService from './songs.service';
import SongsSearchRepository from './songsSearch.repository';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [SongsController],
  providers: [SongsSearchRepository,SongsService],
})  
export class SongDinamicModule {}
