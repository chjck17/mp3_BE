import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import AlbumsService from './album.service';
import CreateAlbumDto from './dto/createAlbum.dto';
import UpdateAlbumDto from './dto/updateAlbum.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';

@Controller('album')
export default class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}
  //Lấy ra danh sách tất cả album
  @Get()
  getAllAlbums() {
    return this.albumService.getAllAlbums();
  }
  //Lấy album theo id
  @Get(':id')
  getAlbumById(@Param('id') id: string) {
    return this.albumService.getAlbumById(id);
  }
  //Thêm bài hát vào album
  @Post('addSongToAlbum/:id/:idAlbum')
  @UseGuards(JwtAuthenticationGuard)
  async addSongToAlbum(
    @Param('id') id: string,
    @Param('idAlbum') idAlbum: string,
  ) {
    return this.albumService.addSongToAlbum(id, idAlbum);
  }
  //Tạo album
  @Post('/createAlbum')
  @UseGuards(JwtAuthenticationGuard)
  async createAlbum(@Body() album: CreateAlbumDto) {
    return this.albumService.createAlbum(album);
  }
  //Cập nhập album
  @Patch(':id')
  async updateAlbum(@Param('id') id: string, @Body() album: UpdateAlbumDto) {
    return this.albumService.updateAlbum(id, album);
  }
  //Xoá album
  @Delete(':id')
  async deleteAlbum(@Param('id') id: string) {
    return this.albumService.deleteAlbum(id);
  }
}
