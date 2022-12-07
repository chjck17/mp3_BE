import UserPlaylist from './userplaylist.entity';
import CreateUserPlayListDto from './dto/createUserPlayList.dto';
import { Repository } from 'typeorm';
import SongsService from 'src/songs/songs.service';
import User from 'src/users/user.entity';
export default class UserPlaylistsService {
    private userPlaylistRepository;
    private songsService;
    constructor(userPlaylistRepository: Repository<UserPlaylist>, songsService: SongsService);
    getAllUserPlaylists(): Promise<UserPlaylist[]>;
    getPostById(id: string): Promise<UserPlaylist[]>;
    getPlayListById(id: string): Promise<UserPlaylist[]>;
    createUserPlaylist(userPlaylist: CreateUserPlayListDto, user: User): Promise<UserPlaylist>;
    addSongToUserPlayList(id: string, iduserPlaylist: string): Promise<UserPlaylist>;
    getSongToUserPlayList(): Promise<UserPlaylist[]>;
}
