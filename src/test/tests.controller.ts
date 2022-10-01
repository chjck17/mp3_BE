import { Body, Req,Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { get } from 'http';
// import PlaylistsService from './userplaylists.service';
import TestService from './tests.service';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
@Controller('test')
export default class TestController {
  constructor(
    private readonly testService: TestService
  ) {}
// @Get()
// getAllPlaylists(){
//   return this.userPlaylistsService.listUserPlaylists();
// }

@UseGuards(JwtAuthenticationGuard)
    @Post()
    async order(@Req() req:RequestWithUser) {
        return this.testService.order(req.user.id)
    }
@UseGuards(JwtAuthenticationGuard)
@Get()
async getOrders(@Req() req:RequestWithUser) {
    return await this.testService.getOrders(req.user.id)
    // return req.user.id ;
}
}

