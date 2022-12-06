import Song from './recentlysong.entity';
import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
import RecentlySong from './recentlysong.entity';
import SongsService from 'src/songs/songs.service';
export default class RecentlySongsService {
    private recentlySongsRepository;
    private songsService;
    constructor(recentlySongsRepository: Repository<RecentlySong>, songsService: SongsService);
    addSongToRecentlySongs(id: string, user: User): Promise<Song>;
    getAllSongs(user: User): Promise<Song[]>;
    deleteSong(id: string): Promise<void>;
}
