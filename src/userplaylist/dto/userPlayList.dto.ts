import User from "src/users/user.entity";
import Song from "src/songs/song.entity";
export class UserPlaylistDto {
  public id?: string;
  public name: string;
  public state: boolean;
  public user: User;
  public listSong:Song[]
}

export default UserPlaylistDto;