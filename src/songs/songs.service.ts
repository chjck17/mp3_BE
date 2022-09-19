import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import Song from './song.entity';
import CreateSongDto from './dto/createSong.dto';
import UpdateSongDto from './dto/updateSong.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import User from 'src/users/user.entity';
import { userInfo } from 'os';
@Injectable()
export default class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>
    
  ) {}

  getAllSongs() {
    return this.songsRepository.find();
  }
  
  async getSongById(id: number) {
    const song = await this.songsRepository.findOne(id);
    if (song) {
      return song;
    }
    
    throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
  }
  
  // async getSongOfUser(idUser: number) {

  //     const user = await getRepository(Song) 
  //     .createQueryBuilder("user") 
  //     .where("user.idUser = :id", { id: idUser }) 
  //     .getMany();
  //   return  user;

  // }


  async createSong(song: CreateSongDto,user:User ) {
    
    if(user.role =='admin'){
    const newSong = await this.songsRepository.create(song);
    await this.songsRepository.save(newSong);
    return newSong;
    }
    throw new UnauthorizedException;
   //return song;
  }

  async updateSong(id: number, song: UpdateSongDto,user:User) {
    if(user.role== 'admin'){
    await this.songsRepository.update(id,song);
    const updatedSong = await this.songsRepository.findOne(id);
    if (updatedSong) {
      return updatedSong
    }
    throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
  }
  throw new UnauthorizedException;
  }

  async deleteSong(id: number) {

    const deleteResponse = await this.songsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }
  }
}
