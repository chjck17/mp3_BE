import FavoriteSong from "src/favoritesongs/favoritesong.entity";
import RecentlySong from "src/recentlysongs/recentlysong.entity";
export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    role: string;
    recentlySongs: RecentlySong;
    favoriteSongs: FavoriteSong;
}
export default CreateUserDto;
