import TokenVerificationDto from './tokenVerification.dto';
import { GoogleAuthenticationService } from './googleAuthentication.service';
import { Request } from 'express';
export declare class GoogleAuthenticationController {
    private readonly googleAuthenticationService;
    constructor(googleAuthenticationService: GoogleAuthenticationService);
    authenticate(tokenData: TokenVerificationDto, request: Request): Promise<{
        user: import("../users/user.entity").default;
        token: string;
        message: string;
    }>;
}
