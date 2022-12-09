
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import RecentlySong from 'src/recentlysongs/recentlysong.entity';

export class EmailRePassWordDto {
  @IsEmail()
  email: string;
}

export default EmailRePassWordDto;