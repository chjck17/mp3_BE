import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Album from './album.entity';
import CreateAlbumDto from './dto/createAlbum.dto';
import UpdateAlbumDto from './dto/updateAlbum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SongsService from 'src/songs/songs.service';
@Injectable()
export default class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    private songsService: SongsService,
  ) {}

  getAllAlbums() {
    return this.albumRepository.find({ relations: ['listSong'] });
  }

  async getAlbumById(id: string) {
    const album = await this.albumRepository.findOne(id);
    if (album) {
      return album;
    }
    throw new HttpException('Albums not found', HttpStatus.NOT_FOUND);
  }

  async addSongToAlbum(id: string, iduserPlaylist: string) {
    const album = new Album();
    const song = await this.songsService.getSongById(id);
    const playlis = await this.albumRepository.findOne(iduserPlaylist);
    album.listSong = [];
    if (album.listSong) {
      for (let i = 0; i < playlis.listSong.length; i++) {
        album.listSong.push(playlis.listSong[i]);
      }
    }
    album.listSong.push(song);
    album.id = playlis.id;
    album.name = playlis.name;
    album.state = playlis.state;
    album.description = playlis.description;
    return this.albumRepository.save(album);
  }

  async createAlbum(album: CreateAlbumDto) {
    const newAlbum = await this.albumRepository.create(album);
    await this.albumRepository.save(newAlbum);
    return newAlbum;
  }

  async updateAlbum(id: string, album: UpdateAlbumDto) {
    await this.albumRepository.update(id, album);
    const updatedAlbum = await this.albumRepository.findOne(id);
    if (updatedAlbum) {
      return updatedAlbum;
    }
    throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
  }

  async deleteAlbum(id: string) {
    const deleteResponse = await this.albumRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
  }
}
