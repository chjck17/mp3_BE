import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { Auth } from 'googleapis';
import { AuthenticationService } from '../authentication/authentication.service';
import User from '../users/user.entity';
export declare class GoogleAuthenticationService {
    private readonly usersService;
    private readonly configService;
    private readonly authenticationService;
    oauthClient: Auth.OAuth2Client;
    constructor(usersService: UsersService, configService: ConfigService, authenticationService: AuthenticationService);
    getUserData(token: string): Promise<import("googleapis").oauth2_v2.Schema$Userinfo>;
    getCookiesForUser(user: User): Promise<{
        accessTokenCookie: string;
        refreshTokenCookie: string;
    }>;
    handleRegisteredUser(user: User): Promise<{
        accessTokenCookie: string;
        refreshTokenCookie: string;
        user: User;
    }>;
    registerUser(token: string, email: string): Promise<{
        accessTokenCookie: string;
        refreshTokenCookie: string;
        user: User;
    }>;
    authenticate(token: string): Promise<{
        accessTokenCookie: string;
        refreshTokenCookie: string;
        user: User;
    }>;
}
