import {
  Controller,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
  Get,
} from '@nestjs/common';
import ConfirmEmailDto from './confirmEmail.dto';
import { EmailConfirmationService } from './emailConfirmation.service';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from '../authentication/requestWithUser.interface';

@Controller('email-confirmation')
@UseInterceptors(ClassSerializerInterceptor)
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService
  ) {}

  @Get('confirm/:token')
  
  async confirm(@Param('token')  token: string) {
    const email = await this.emailConfirmationService.decodeConfirmationToken(token);
    await this.emailConfirmationService.confirmEmail(email);
    return token
  }

  @Post('resend-confirmation-link')
  @UseGuards(JwtAuthenticationGuard)
  async resendConfirmationLink(@Req() request: RequestWithUser) {
    await this.emailConfirmationService.resendConfirmationLink(request.user.id);
  }
}