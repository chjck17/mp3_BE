import { EmailConfirmationService } from './emailConfirmation.service';
import RequestWithUser from '../authentication/requestWithUser.interface';
export declare class EmailConfirmationController {
    private readonly emailConfirmationService;
    constructor(emailConfirmationService: EmailConfirmationService);
    confirm(token: string): Promise<string>;
    resendConfirmationLink(request: RequestWithUser): Promise<void>;
}
