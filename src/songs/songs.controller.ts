import { Body, Controller, Delete, Get,Req, Param, Patch, Post, UseGuards } from '@nestjs/common';
import SongsService from './songs.service';
import CreateSongDto from './dto/createSong.dto';
import UpdateSongDto from './dto/updateSong.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
// import PlaylistsService from 'src/userplaylist/userplaylists.service';

@Controller('song')
export default class SongsController {
  constructor(
    private readonly songsService: SongsService,
    // private readonly playlistsService:PlaylistsService
  ) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllSongs() {
    return this.songsService.getAllSongs();
  }

  @Get(':id')
  getSongById(@Param('id') id: string) {
    return this.songsService.getSongById(Number(id));
  }
  // @Get('/user/:id')

  // @UseGuards(JwtAuthenticationGuard)
  // getSongOfUser(@Param('id') id: string) {
  //   // const {user} = request;
  //   return this.songsService.getSongOfUser(Number(id));
  //   // return user;
  // }
  @UseGuards(JwtAuthenticationGuard)
  @Post()
  async createSong(@Req() req:RequestWithUser,@Body() song: CreateSongDto) {
   //return req?.user; 
    return this.songsService.createSong(song,req.user);
  }

  // @UseGuards(JwtAuthenticationGuard)
  // @Post('/add/:id')
  // async addSongIntoCart(@Req() req:RequestWithUser,@Param('id') id:number ){
  //   return this.playlistsService.addToPlayList(req.user.id,id);
  // }
 
  @Patch(':id')
  async updateSong(@Req() req:RequestWithUser,@Param('id') id: string, @Body() song: UpdateSongDto) {
    return this.songsService.updateSong(Number(id), song,req.user);
  }

  @Delete(':id')
  async deleteSong(@Param('id') id: string) {
    return this.songsService.deleteSong(Number(id));
  }
}
