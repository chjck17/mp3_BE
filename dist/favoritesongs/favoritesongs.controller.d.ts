import RequestWithUser from './requestWithUser.interface';
import FavoriteSongsService from './favoritesongs.service';
export default class FavoriteSongsController {
    private readonly favoriteSongsService;
    constructor(favoriteSongsService: FavoriteSongsService);
    getAllSongs(request: RequestWithUser): Promise<import("../songs/song.entity").default[]>;
    addSongToFavorite(id: string, request: RequestWithUser): Promise<import("./favoritesong.entity").default>;
    deleteSongFromFavorite(id: string, request: RequestWithUser): Promise<import("./favoritesong.entity").default>;
}
