import SongsService from './songs.service';
import CreateSongDto from './dto/createSong.dto';
import UpdateSongDto from './dto/updateSong.dto';
import RequestWithUser from './requestWithUser.interface';
export default class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    getAllSongs(): Promise<import("./song.entity").default[]>;
    getAllSongsWithCategory(): Promise<import("./song.entity").default[]>;
    getSongById(id: string): Promise<import("./song.entity").default>;
    createSong(req: RequestWithUser, song: CreateSongDto): Promise<import("./song.entity").default>;
    updateSong(req: RequestWithUser, id: string, song: UpdateSongDto): Promise<import("./song.entity").default>;
    deleteSong(id: string): Promise<void>;
}
