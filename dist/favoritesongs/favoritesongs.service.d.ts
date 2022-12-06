import Song from './favoritesong.entity';
import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
import SongsService from 'src/songs/songs.service';
import FavoriteSong from './favoritesong.entity';
export default class FavoriteSongsService {
    private favoriteSongsRepository;
    private songsService;
    constructor(favoriteSongsRepository: Repository<FavoriteSong>, songsService: SongsService);
    addSongToFavoriteSongs(id: string, user: User): Promise<Song>;
    getAllSongs(user: User): Promise<import("../songs/song.entity").default[]>;
    deleteSong(id: string, user: User): Promise<Song>;
}
