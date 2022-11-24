import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import Song from './favoritesong.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import User from 'src/users/user.entity';
import { userInfo } from 'os';
import { number } from '@hapi/joi';
import { relative } from 'path';
import RecentlySong from './favoritesong.entity';
import SongsService from 'src/songs/songs.service';
import FavoriteSong from './favoritesong.entity';
@Injectable()
export default class FavoriteSongsService {
  constructor(
    @InjectRepository(FavoriteSong)
    private favoriteSongsRepository: Repository<FavoriteSong>,
    private songsService: SongsService,
  ) {}

async addSongToFavoriteSongs(id: string ,user:User) {
    const favorite = new FavoriteSong()
    const song= await this.songsService.getSongById(id)

    const songs= await this.favoriteSongsRepository.find({ relations: ['user'] });
    const playlis= songs.filter(
                item => item.user.id == user.id,
       )
    favorite.listSong =[] 
    if(favorite.listSong){
    for (let i = 0; i < playlis[0].listSong.length; i++) {          
          favorite.listSong.push(playlis[0].listSong[i]);
        }
    }
    favorite.listSong.push(song)
    favorite.id=playlis[0].id
  
    return this.favoriteSongsRepository.save(favorite);
  }
async getAllSongs(user:User) {
      const song= await this.favoriteSongsRepository.find({ relations: ['user'] });
      const recentlysong= song.filter(
                item => item.user.id == user.id,
       )
    return recentlysong;
  }
async deleteSong(id: number ,user:User) {

   const songs= await this.favoriteSongsRepository.find({ relations: ['user'] });
    const playlis= songs.filter(
                item => item.user.id == user.id,
       )

   return playlis;
    // const deleteResponse = await this.favoriteSongsRepository.delete(id);
    // if (!deleteResponse.affected) {
    //   throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    // }
  }
}
