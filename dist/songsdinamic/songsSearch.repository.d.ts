import DatabaseService from 'src/databasedinamic/database.service';
import AlbumModel from './album.model';
import SongModel from './song.model';
declare class SongsSearchRepository {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    search(searchQuery: string): Promise<{
        itemsSong: SongModel[];
        countSong: any;
        itemsAlbum: AlbumModel[];
        countAlbum: any;
    }>;
}
export default SongsSearchRepository;
