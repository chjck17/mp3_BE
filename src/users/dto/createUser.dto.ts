import RecentlySong from "src/recentlysongs/recentlysong.entity";

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  role:string;
  recentlySongs:RecentlySong;
}

export default CreateUserDto;