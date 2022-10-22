
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  @MinLength(7)
  password: string;
  
  role:string;
}

export default RegisterDto;