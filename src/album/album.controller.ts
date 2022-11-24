import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import AlbumsService from './album.service';
import CreateAlbumDto from './dto/createAlbum.dto';
import UpdateAlbumDto from './dto/updateAlbum.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';


@Controller('album')
export default class AlbumsController {
  constructor(
    private readonly albumService: AlbumsService
  ) {}
  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllAlbums() {
    return this.albumService.getAllAlbums();
  }
  @Get(':id')
  getAlbumById(@Param('id') id: string) {
    return this.albumService.getAlbumById(Number(id));
  }
  @Post('addSongToAlbum/:id/:idAlbum')
  @UseGuards(JwtAuthenticationGuard)
  async addSongToAlbum(@Param('id') id : string,@Param('idAlbum') idAlbum : string) {
    return this.albumService.addSongToAlbum(id,Number(idAlbum));
  }

  @Post('/createAlbum')
  @UseGuards(JwtAuthenticationGuard)
  async createAlbum(@Body() album: CreateAlbumDto) {
    return this.albumService.createAlbum(album);
  }

  @Patch(':id')
  async updateAlbum(@Param('id') id: string, @Body() album: UpdateAlbumDto) {
    return this.albumService.updateAlbum(Number(id), album);
  }

  @Delete(':id')
  async deleteAlbum(@Param('id') id: string) {
    return this.albumService.deleteAlbum(Number(id));
  }
}
