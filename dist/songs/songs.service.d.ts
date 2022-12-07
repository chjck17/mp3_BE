import Song from './song.entity';
import CreateSongDto from './dto/createSong.dto';
import UpdateSongDto from './dto/updateSong.dto';
import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
export default class SongsService {
    private songsRepository;
    constructor(songsRepository: Repository<Song>);
    getAllSongs(): Promise<Song[]>;
    getAllSongsWithCategory(): Promise<Song[]>;
    getSongById(id: string): Promise<Song>;
    createSong(song: CreateSongDto, user: User): Promise<Song>;
    updateSong(id: string, song: UpdateSongDto, user: User): Promise<Song>;
    deleteSong(id: string): Promise<void>;
}
