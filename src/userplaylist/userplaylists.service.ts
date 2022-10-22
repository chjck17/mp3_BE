import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserPlaylist from './userplaylist.entity';
import CreateUserPlayListDto from './dto/createUserPlayList.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
 import SongsService from 'src/songs/songs.service';
import User from 'src/users/user.entity';
@Injectable()
export default class UserPlaylistsService {
  constructor(
    @InjectRepository(UserPlaylist)

    private userPlaylistRepository: Repository<UserPlaylist>,
    private songsService: SongsService,
  ) {}
   getAllUserPlaylists() {
    return this.userPlaylistRepository.find({ relations: ['user'] });
  }
  async getPostById(id: number) {
  const post = await this.userPlaylistRepository.find({ relations: ['user'] });
  const userPlaylist= post.filter(
                  item => item.user.id == id ,
  )
    return userPlaylist;
  }
    async getPlayListById(id: number) {
  const post = await this.userPlaylistRepository.find({ relations: ['user'] });
  const userPlaylist= post.filter(
                item => item.id == id ,
  )
    return userPlaylist;
  }
  async createUserPlaylist(userPlaylist: CreateUserPlayListDto, user: User) {
    const newUserPlaylist = await this.userPlaylistRepository.create({
      ...userPlaylist,
      user: user,
    });
    await this.userPlaylistRepository.save(newUserPlaylist);
    return newUserPlaylist;
  }
  async addSongToUserPlayList(id: number ,iduserPlaylist:number) {
      const userPlaylist = new UserPlaylist()
      const song= await this.songsService.getSongById(id)
      const userPlaylis = await this.userPlaylistRepository.findOne(iduserPlaylist)
      userPlaylist.listSong =[] 
      if(userPlaylist.listSong){
      for (let i = 0; i < userPlaylis.listSong.length; i++) {          
            userPlaylist.listSong.push(userPlaylis.listSong[i]);
          }
      }
      userPlaylist.listSong.push(song)
      userPlaylist.id=userPlaylis.id
      userPlaylist.name=userPlaylis.name
      userPlaylist.state=userPlaylis.state
      userPlaylist.user=userPlaylis.user
     return this.userPlaylistRepository.save(userPlaylist);
    }

  async getSongToUserPlayList() {
          return this.userPlaylistRepository.find( { relations: ['listSong'] });
    }
  // async updateUserPlaylist(id: number, post: UpdateUserPlayListDto) {
  //   await this.userPlaylistRepository.update(id, post);
  //   const updatedPost = await this.userPlaylistRepository.findOne(id, { relations: ['items'] });
  //   if (updatedPost) {
  //     return updatedPost
  //   }
  //   throw new PostNotFoundException(id);
  // }
  // async deleteUserPlaylist(id: number) {
  //   const deleteResponse = await this.userPlaylistRepository.delete(id);
  //   if (!deleteResponse.affected) {
  //     throw new PostNotFoundException(id);
  //   }
  // }
  // async addSongToUserPlayList(id: number ,iduserPlaylist:number) {
  //     const userPlaylist = new UserPlaylist()
  //     const  song= await this.songsService.getSongById(id)
  //     const userUpdated = await this.userPlaylistRepository.findOne(iduserPlaylist)
  //     userPlaylist.listSong = [];
  //     userPlaylist.name=userUpdated.name
  //     userPlaylist.state=userUpdated.state
  //     userPlaylist.user=userUpdated.user
  //     userPlaylist.listSong.push(song);
  //     return this.userPlaylistRepository.save( userPlaylist);
  //   }
}
