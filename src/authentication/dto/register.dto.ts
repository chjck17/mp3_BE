
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import RecentlySong from 'src/recentlysongs/recentlysong.entity';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  @MinLength(7)
  password: string;
  
  role:string;


  recentlySongs:RecentlySong;
}

export default RegisterDto;