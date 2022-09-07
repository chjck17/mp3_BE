import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Album from './album.entity';
import CreateAlbumDto from './dto/createAlbum.dto';
import UpdateAlbumDto from './dto/updateAlbum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
@Injectable()
export default class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>
    
  ) {}

  getAllAlbums() {
    return this.albumRepository.find();
  }

  async getAlbumById(id: number) {
    const album = await this.albumRepository.findOne(id);
    if (album) {
      return album;
    }
    throw new HttpException('Albums not found', HttpStatus.NOT_FOUND);
  }
  
  async getAlbumOfUser(idUser: number) {

      const user = await getRepository(Album) 
      .createQueryBuilder("user") 
      .where("user.idUser = :id", { id: idUser }) 
      .getMany();
    return  user;

  }


  async createAlbum(album: CreateAlbumDto) {
    const newAlbum = await this.albumRepository.create(album);
    await this.albumRepository.save(newAlbum);
    return newAlbum;
  }

  async updateAlbum(id: number, album: UpdateAlbumDto) {
    await this.albumRepository.update(id,album);
    const updatedAlbum = await this.albumRepository.findOne(id);
    if (updatedAlbum) {
      return updatedAlbum
    }
    throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
  }

  async deleteAlbum(id: number) {
    const deleteResponse = await this.albumRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }
  }
}
