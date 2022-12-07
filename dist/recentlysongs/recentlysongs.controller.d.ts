import RequestWithUser from './requestWithUser.interface';
import RecentlySongsService from './recentlysongs.service';
export default class RecentlySongsController {
    private readonly recentlySongsService;
    constructor(recentlySongsService: RecentlySongsService);
    getAllSongs(request: RequestWithUser): Promise<import("./recentlysong.entity").default[]>;
    addSongToAlbum(id: string, request: RequestWithUser): Promise<import("./recentlysong.entity").default>;
}
