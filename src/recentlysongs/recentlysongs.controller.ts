import { Body, Controller, Delete, Get,Req, Param, Patch, Post, UseGuards } from '@nestjs/common';
import SongsService from './recentlysongs.service';

import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
import RecentlySongsService from './recentlysongs.service';

@Controller('recentlySongs')
export default class RecentlySongsController {
  constructor(
    private readonly recentlySongsService: RecentlySongsService,
  ) {}
  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllSongs(@Req() request: RequestWithUser) {
    return this.recentlySongsService.getAllSongs(request.user);
  }

  @Post('addSongToRecentlySongs/:id')
  @UseGuards(JwtAuthenticationGuard)
  async addSongToAlbum(@Param('id') id : string,@Req() request: RequestWithUser) {
    return this.recentlySongsService.addSongToRecentlySongs(Number(id),request.user);
  }
//  @Get('/category')
//   @UseGuards(JwtAuthenticationGuard)
//   getAllSongsWithCategory() {
//     return this.songsService.getAllSongsWithCategory();
//   }


//   @Get(':id')
//   getSongById(@Param('id') id: string) {
//     return this.songsService.getSongById(Number(id));
//   }ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
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
