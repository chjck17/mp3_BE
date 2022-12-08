import FavoriteSong from "src/favoritesongs/favoritesong.entity";
import RecentlySong from "src/recentlysongs/recentlysong.entity";

export class EditProfileDto {
  email: string;
  sex: string;
  dateOfBirth: Date;
 country:string ;
}

export default EditProfileDto;