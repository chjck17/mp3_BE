
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';


export class RePassWordDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  @MinLength(7)
  password: string;
}

export default RePassWordDto;