import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
import { ConfigService } from '@nestjs/config';
import { EmailConfirmationService } from 'src/emailConfirmation/emailConfirmation.service';
import RePassWordDto from './dto/repassword.dto';
import EditProfileDto from 'src/users/dto/editProfile.dto';
import { UsersService } from 'src/users/users.service';
import EmailRePassWordDto from './dto/emailForgetPassWord.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    private readonly configService;
    private readonly emailConfirmationService;
    private readonly usersService;
    constructor(authenticationService: AuthenticationService, configService: ConfigService, emailConfirmationService: EmailConfirmationService, usersService: UsersService);
    register(registrationData: RegisterDto): Promise<import("../users/user.entity").default>;
    logIn(request: RequestWithUser, response: Response): Promise<Response<any, Record<string, any>>>;
    logOut(response: Response): Promise<Response<any, Record<string, any>>>;
    authenticate(request: RequestWithUser): import("../users/user.entity").default;
    rePassword(request: RequestWithUser, rePassword: RePassWordDto): Promise<void>;
    forgotPassword(email: EmailRePassWordDto): Promise<void>;
    editProfile(request: RequestWithUser, profile: EditProfileDto): Promise<{
        sex: string;
        dateOfBirth: Date;
        country: string;
        id?: string;
        email: string;
        isEmailConfirmed: boolean;
        name: string;
        role: string;
        password: string;
        userPlaylist: import("../userplaylist/userplaylist.entity").default[];
        recentlySongs: import("../recentlysongs/recentlysong.entity").default;
        favoriteSongs: import("../favoritesongs/favoritesong.entity").default;
        isRegisteredWithGoogle: boolean;
        currentHashedRefreshToken?: string;
    } & import("../users/user.entity").default>;
}
