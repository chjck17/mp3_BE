import SearchSongsQuery from './searchSongsQuery';
import SongsService from './songs.service';
export default class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    getPosts({ search }: SearchSongsQuery): Promise<{
        itemsSong: import("./song.model").default[];
        countSong: any;
        itemsAlbum: import("./album.model").default[];
        countAlbum: any;
    }>;
}
