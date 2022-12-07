import User from 'src/users/user.entity';
import Song from 'src/songs/song.entity';
declare class UserPlaylist {
    id?: string;
    name: string;
    state: boolean;
    image: string;
    description: string;
    user: User;
    listSong: Song[];
}
export default UserPlaylist;
