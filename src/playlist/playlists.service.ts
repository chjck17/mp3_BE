import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import Playlist from './playlist.entity';
import CreatePlaylistDto from './dto/createPlaylist.dto';
import UpdatePlaylistDto from './dto/updatePlaylist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import User from 'src/users/user.entity';
import { userInfo } from 'os';
@Injectable()
export default class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistsRepository: Repository<Playlist>
    
  ) {}

  getAllPlaylists() {
    return this.playlistsRepository.find();
  }
  
  async getPlaylistById(id: number) {
    const playlist = await this.playlistsRepository.findOne(id);
    if (playlist) {
      return playlist;
    }
    
    throw new HttpException('Playlist not found', HttpStatus.NOT_FOUND);
  }
  
  // async getSongOfUser(idUser: number) {

  //     const user = await getRepository(Song) 
  //     .createQueryBuilder("user") 
  //     .where("user.idUser = :id", { id: idUser }) 
  //     .getMany();
  //   return  user;

  // }


  async createPlaylist(playlist: CreatePlaylistDto,user:User ) {
    
    if(user.role =='user'){
    const newPlaylist = await this.playlistsRepository.create(playlist);
    await this.playlistsRepository.save(newPlaylist);
    return newPlaylist;
    }
    throw new UnauthorizedException;
   //return song;
  }

  async updatePlaylist(id: number, playlist: UpdatePlaylistDto,user:User) {
    if(user.role== 'user'){
    await this.playlistsRepository.update(id,playlist);
    const updatedPlaylist = await this.playlistsRepository.findOne(id);
    if (updatedPlaylist) {
      return updatedPlaylist
    }
    throw new HttpException('Playlist not found', HttpStatus.NOT_FOUND);
  }
  throw new UnauthorizedException;
  }

  async deletePlaylist(id: number) {

    const deleteResponse = await this.playlistsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Playlist not found', HttpStatus.NOT_FOUND);
    }
  }
}
