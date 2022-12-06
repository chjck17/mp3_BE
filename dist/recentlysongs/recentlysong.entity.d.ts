import Song from 'src/songs/song.entity';
import User from 'src/users/user.entity';
declare class RecentlySong {
    id?: string;
    listSong: Song[];
    user: User;
}
export default RecentlySong;
