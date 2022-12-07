import UserPlaylistsService from './userplaylists.service';
import CreateUserPlayListDto from './dto/createUserPlayList.dto';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { UsersService } from 'src/users/users.service';
import UserPlaylist from './userplaylist.entity';
export default class UserPlaylistsController {
    private readonly userPlaylistsService;
    private readonly usersService;
    constructor(userPlaylistsService: UserPlaylistsService, usersService: UsersService);
    getUserPlayList(req: RequestWithUser): Promise<UserPlaylist[]>;
    getUserPlayListDetail(req: RequestWithUser, id: string): Promise<UserPlaylist>;
    addsongToUserPlayList(id: string, idplaylist: string): Promise<UserPlaylist>;
    getSongToUserPlayList(): Promise<UserPlaylist[]>;
    createUserPlaylist(userPlaylist: CreateUserPlayListDto, req: RequestWithUser): Promise<UserPlaylist>;
}
