import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
import { ConfigService } from '@nestjs/config';
import { EmailConfirmationService } from 'src/emailConfirmation/emailConfirmation.service';
import RePassWordDto from './dto/repassword.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    private readonly configService;
    private readonly emailConfirmationService;
    constructor(authenticationService: AuthenticationService, configService: ConfigService, emailConfirmationService: EmailConfirmationService);
    register(registrationData: RegisterDto): Promise<import("../users/user.entity").default>;
    logIn(request: RequestWithUser, response: Response): Promise<Response<any, Record<string, any>>>;
    logOut(response: Response): Promise<Response<any, Record<string, any>>>;
    authenticate(request: RequestWithUser): import("../users/user.entity").default;
    rePassword(request: RequestWithUser, rePassword: RePassWordDto): Promise<void>;
    forgotPassword(request: RequestWithUser): Promise<void>;
}
