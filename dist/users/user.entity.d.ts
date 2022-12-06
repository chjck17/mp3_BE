import UserPlaylist from 'src/userplaylist/userplaylist.entity';
import RecentlySong from 'src/recentlysongs/recentlysong.entity';
import FavoriteSong from 'src/favoritesongs/favoritesong.entity';
declare class User {
    id?: string;
    email: string;
    isEmailConfirmed: boolean;
    name: string;
    role: string;
    password: string;
    userPlaylist: UserPlaylist[];
    recentlySongs: RecentlySong;
    favoriteSongs: FavoriteSong;
    isRegisteredWithGoogle: boolean;
    currentHashedRefreshToken?: string;
}
export default User;
