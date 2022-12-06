import Song from 'src/songs/song.entity';
import User from 'src/users/user.entity';
declare class FavoriteSong {
    id?: string;
    listSong: Song[];
    user: User;
}
export default FavoriteSong;
