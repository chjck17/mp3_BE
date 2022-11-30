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
} from '@nestjs/common';
import SongsService from './favoritesongs.service';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
import FavoriteSongsService from './favoritesongs.service';
@Controller('favoriteSongs')
export default class FavoriteSongsController {
  constructor(private readonly favoriteSongsService: FavoriteSongsService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllSongs(@Req() request: RequestWithUser) {
    return this.favoriteSongsService.getAllSongs(request.user);
  }

  @Post('addSongToFavoriteSongs/:uuid')
  @UseGuards(JwtAuthenticationGuard)
  async addSongToFavorite(
    @Param('uuid') id: string,
    @Req() request: RequestWithUser,
  ) {
    return this.favoriteSongsService.addSongToFavoriteSongs(id, request.user);
  }
  @Delete('deleteSongFromFavoriteSongs/:id')
  @UseGuards(JwtAuthenticationGuard)
  async deleteSongFromFavorite(
    @Param('id') id: string,
    @Req() request: RequestWithUser,
  ) {
    return this.favoriteSongsService.deleteSong(id, request.user);
  }
}
