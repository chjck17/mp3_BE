import AlbumsService from './album.service';
import CreateAlbumDto from './dto/createAlbum.dto';
import UpdateAlbumDto from './dto/updateAlbum.dto';
export default class AlbumsController {
    private readonly albumService;
    constructor(albumService: AlbumsService);
    getAllAlbums(): Promise<import("./album.entity").default[]>;
    getAlbumById(id: string): Promise<import("./album.entity").default>;
    addSongToAlbum(id: string, idAlbum: string): Promise<import("./album.entity").default>;
    createAlbum(album: CreateAlbumDto): Promise<import("./album.entity").default>;
    updateAlbum(id: string, album: UpdateAlbumDto): Promise<import("./album.entity").default>;
    deleteAlbum(id: string): Promise<void>;
}
