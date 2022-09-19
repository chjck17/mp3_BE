import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserPlaylist from './userplaylist.entity';
// import SongsService from 'src/songs/songs.service';
// import Playlist from 'src/playlist/playlist.entity';
import PlaylistsService from 'src/playlist/playlists.service';
// import CreateAlbumDto from './dto/createPlayList.dto';
// import UpdateAlbumDto from './dto/updatePlayList.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
@Injectable()
export default class UserPlaylistsService {
  constructor(
    @InjectRepository(UserPlaylist)
    private userPlaylistRepository: Repository<UserPlaylist>,
    private playlistsService :PlaylistsService,
  ) {}
  async addToUserPlayList(user:number,playlistId:number){
      const userPlaylistItems = await this.userPlaylistRepository.find();
      // const playlist = playlistItems.filter(
      //           (item) => item.songId == songId && item.userId == user,
      //       );
      // return playlist.length;
      const playlist = await this.playlistsService.getPlaylistById(playlistId);
      if(playlist){
          const userplaylist =userPlaylistItems.filter(
                (item) => item.playlistId == playlistId && item.userId == user,
            );
             if (userplaylist.length < 1) {
                const newItem = {
                    playlistId: playlist.id,
                    userId: user
                }
                return await this.userPlaylistRepository.save(newItem);                       
            } 
             throw new HttpException('Song is exit',HttpStatus.FOUND);          
      }
      return null;
  }
  
  listUserPlaylists(){
    return this.userPlaylistRepository.find()
  }
}
