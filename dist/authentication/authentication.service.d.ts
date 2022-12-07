import { UsersService } from '../users/users.service';
import RegisterDto from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import RePassWordDto from './dto/repassword.dto';
import EmailService from 'src/email/email.service';
import User from 'src/users/user.entity';
export declare class AuthenticationService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    private readonly emailService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService, emailService: EmailService);
    register(registrationData: RegisterDto): Promise<User>;
    getCookieWithJwtToken(userId: string): string;
    getCookieForLogOut(): string;
    getAuthenticatedUser(email: string, plainTextPassword: string): Promise<User>;
    private verifyPassword;
    getCookieWithJwtAccessToken(userId: string, isSecondFactorAuthenticated?: boolean): string;
    getCookieWithJwtRefreshToken(userId: string): {
        cookie: string;
        token: string;
    };
    forgotPassword(user: User, pass: RePassWordDto): Promise<import("typeorm").UpdateResult>;
    rePassword(user: User, pass: RePassWordDto): Promise<import("typeorm").UpdateResult>;
}
