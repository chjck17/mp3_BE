import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import EmailService from '../email/email.service';
import { UsersService } from '../users/users.service';
export declare class EmailConfirmationService {
    private readonly jwtService;
    private readonly configService;
    private readonly emailService;
    private readonly usersService;
    constructor(jwtService: JwtService, configService: ConfigService, emailService: EmailService, usersService: UsersService);
    sendVerificationLink(email: string): Promise<any>;
    resendConfirmationLink(userId: string): Promise<void>;
    confirmEmail(email: string): Promise<void>;
    decodeConfirmationToken(token: string): Promise<any>;
}
