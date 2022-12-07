import {
  Body,
  Controller,
  Delete,
  Get,
  Req,
  Param,
  Patch,
  Post,
  UseGuards,
  Query,
} from '@nestjs/common';
import SearchSongsQuery from './searchSongsQuery';
import SongsService from './songs.service';

@Controller('songs')
export default class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get('/search')
  getPosts(@Query() { search }: SearchSongsQuery) {
    return this.songsService.getSongs(search);
  }
}
