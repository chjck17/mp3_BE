import { Body, Controller, Delete, Get,Req, Param, Patch, Post, UseGuards } from '@nestjs/common';
import SongsService from './recentlysongs.service';

import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
@Controller('song')
export default class SongsController {
  constructor(
    private readonly songsService: SongsService,
  ) {}
//   @Get()
//   @UseGuards(JwtAuthenticationGuard)
//   getAllSongs() {
//     return this.songsService.getAllSongs();
//   }
//  @Get('/category')
//   @UseGuards(JwtAuthenticationGuard)
//   getAllSongsWithCategory() {
//     return this.songsService.getAllSongsWithCategory();
//   }


//   @Get(':id')
//   getSongById(@Param('id') id: string) {
//     return this.songsService.getSongById(Number(id));
//   }
//   @UseGuards(JwtAuthenticationGuard)
//   @Post()
//   async createSong(@Req() req:RequestWithUser,@Body() song: CreateSongDto) {
//     return this.songsService.createSong(song,req.user);
//   }
//   @Patch(':id')
//   async updateSong(@Req() req:RequestWithUser,@Param('id') id: string, @Body() song: UpdateSongDto) {
//     return this.songsService.updateSong(Number(id), song,req.user);
//   }
//   @Delete(':id')
//   async deleteSong(@Param('id') id: string) {
//     return this.songsService.deleteSong(Number(id));
//   }
}
