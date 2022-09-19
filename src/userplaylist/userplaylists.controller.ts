import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { get } from 'http';
// import PlaylistsService from './userplaylists.service';
import UserPlaylistsService from './userplaylists.service';

@Controller('userplaylist')
export default class UserPlaylistsController {
  constructor(
    private readonly userPlaylistsService: UserPlaylistsService
  ) {}
@Get()
getAllPlaylists(){
  return this.userPlaylistsService.listUserPlaylists();
}
}

