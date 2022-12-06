import User from "src/users/user.entity";
import Song from "src/songs/song.entity";
export declare class UserPlaylistDto {
    id?: string;
    name: string;
    state: boolean;
    user: User;
    listSong: Song[];
}
export default UserPlaylistDto;
