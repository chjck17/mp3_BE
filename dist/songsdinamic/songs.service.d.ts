import SongsSearchRepository from './songsSearch.repository';
export default class SongsService {
    private songsSearchRepository;
    constructor(songsSearchRepository: SongsSearchRepository);
    getSongs(searchQuery?: string): Promise<{
        itemsSong: import("./song.model").default[];
        countSong: any;
        itemsAlbum: import("./album.model").default[];
        countAlbum: any;
    }>;
}
