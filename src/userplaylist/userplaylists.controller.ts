import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards,Req } from '@nestjs/common';
import { get } from 'http';
import UserPlaylistsService from './userplaylists.service';
import CreateUserPlayListDto from './dto/createUserPlayList.dto';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { UsersService } from 'src/users/users.service';
import { number } from '@hapi/joi';
import UserPlaylist from './userplaylist.entity';
import UserPlaylistDto from './dto/userPlayList.dto';
@Controller('userplaylist')
export default class UserPlaylistsController {
  constructor(
    private readonly userPlaylistsService: UserPlaylistsService,
    private readonly usersService: UsersService,
  ) {}
  // @Get()
  // async GetAllUserPlayList( )
  // {
  //   return this.userPlaylistsService.getAllUserPlaylists()
  // }
  @Get('/getUserPlayList')
  @UseGuards(JwtAuthenticationGuard)
  getUserPlayList(@Req() req: RequestWithUser) {
    return this.usersService.getUserPlayList( req.user);
  }
  @Get('/getUserPlayList/:id')
  @UseGuards(JwtAuthenticationGuard)
  getUserPlayListDetail(@Req() req: RequestWithUser, @Param('id') id: string) {
    return this.usersService.getUserPlayListDetail( req.user, id);
  }
  @Post('addSongToUserPlayList/:id/:idplaylist')
  async addsongToUserPlayList(@Param('id') id : string,@Param('idplaylist') idplaylist : string) {
     return this.userPlaylistsService.addSongToUserPlayList(id,idplaylist)
  }
  @Post('/getSongToUserPlayList')
  async getSongToUserPlayList() {
    return this.userPlaylistsService.getSongToUserPlayList()
  }
  @Post('/createUserPlayList')
  @UseGuards(JwtAuthenticationGuard)
  async createUserPlaylist(@Body() userPlaylist: CreateUserPlayListDto, @Req() req: RequestWithUser) {
    return this.userPlaylistsService.createUserPlaylist(userPlaylist, req.user);
  }
}

