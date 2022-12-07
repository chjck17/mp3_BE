import Album from './album.entity';
import CreateAlbumDto from './dto/createAlbum.dto';
import UpdateAlbumDto from './dto/updateAlbum.dto';
import { Repository } from 'typeorm';
import SongsService from 'src/songs/songs.service';
export default class AlbumsService {
    private albumRepository;
    private songsService;
    constructor(albumRepository: Repository<Album>, songsService: SongsService);
    getAllAlbums(): Promise<Album[]>;
    getAlbumById(id: string): Promise<Album>;
    addSongToAlbum(id: string, iduserPlaylist: string): Promise<Album>;
    createAlbum(album: CreateAlbumDto): Promise<Album>;
    updateAlbum(id: string, album: UpdateAlbumDto): Promise<Album>;
    deleteAlbum(id: string): Promise<void>;
}
