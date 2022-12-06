import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import Song from './recentlysong.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import User from 'src/users/user.entity';
import { userInfo } from 'os';
import { number } from '@hapi/joi';
import { relative } from 'path';
import RecentlySong from './recentlysong.entity';
import SongsService from 'src/songs/songs.service';
@Injectable()
export default class RecentlySongsService {
  constructor(
    @InjectRepository(RecentlySong)
    private recentlySongsRepository: Repository<RecentlySong>,
    private songsService: SongsService,
  ) {}

  async addSongToRecentlySongs(id: string ,user:User) {
    const album = new RecentlySong()
    const song= await this.songsService.getSongById(id)

    const songs= await this.recentlySongsRepository.find({ relations: ['user'] });
    const playlis= songs.filter(
                item => item?.user?.id == user.id,
       )
    // const playlis = await this.recentlySongsRepository.findOne(iduserPlaylist)
    album.listSong =[] 
     if (album.listSong) {
      if( playlis[0].listSong.length >=8 )
        for (let i = 1; i < 8; i++) {
          album.listSong.push(playlis[0].listSong[i]);
        }
      else {
         for (let i = 0; i < playlis[0].listSong.length; i++) {
          album.listSong.push(playlis[0].listSong[i]);
        }
      }
    }
    album.listSong.push(song)
    album.id=playlis[0].id
  
    return this.recentlySongsRepository.save(album);
  
  }
async getAllSongs(user:User) {
    // return this.recentlySongsRepository.find();
      const song= await this.recentlySongsRepository.find({ relations: ['user'] });
      const recentlysong= song.filter(
                item => item?.user?.id == user.id,
       )
    return recentlysong;
  }
  async deleteSong(id: string) {
    const deleteResponse = await this.recentlySongsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }
  }
  
  // async createRecentlySongs(user: User) {
  //   const album = new RecentlySong
  //   album.user = user
  //   album.listSong=[]
  //   const newAlbum = await this.recentlySongsRepository.create(album);
  //   await this.recentlySongsRepository.save(newAlbum);
  //   return newAlbum;
  // }
}
