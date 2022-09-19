import { Body, Controller, Delete, Get,Req, Param, Patch, Post, UseGuards } from '@nestjs/common';
import PlaylistsService from './playlists.service';
import CreatePlaylistDto from './dto/createPlaylist.dto';
import UpdatePlaylistDto from './dto/updatePlaylist.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
import UserPlaylistsService from 'src/userplaylist/userplaylists.service';

@Controller('playlist')
export default class PlaylistsController {
  constructor(
    private readonly playlistsService:PlaylistsService,
    private readonly userPlayslistsService: UserPlaylistsService,
  ) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllPlaylist() {
    return this.playlistsService.getAllPlaylists();
  }

  @Get(':id')
  getPlaylistById(@Param('id') id: string) {
    return this.playlistsService.getPlaylistById(Number(id));
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
  async createPlaylist(@Req() req:RequestWithUser,@Body() playlist: CreatePlaylistDto) {
   //return req?.user; 
    return this.playlistsService.createPlaylist(playlist,req.user);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('/add/:id')
  async addIntoUserPlaylists(@Req() req:RequestWithUser,@Param('id') id:number ){
    return this.userPlayslistsService.addToUserPlayList(req.user.id,id)
  }
 
  @Patch(':id')
  async updatePlaylist(@Req() req:RequestWithUser,@Param('id') id: string, @Body() playlist: UpdatePlaylistDto) {
    return this.playlistsService.updatePlaylist(Number(id), playlist,req.user);
  }

  @Delete(':id')
  async deletePlaylist(@Param('id') id: string) {
    return this.playlistsService.deletePlaylist(Number(id));
  }
}
