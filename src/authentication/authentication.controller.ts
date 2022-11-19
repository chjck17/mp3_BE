import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import JwtAuthenticationGuard from './jwt-authentication.guard';
import { ConfigService } from '@nestjs/config';
import RecentlySongsService from 'src/recentlysongs/recentlysongs.service';
import { EmailConfirmationService } from 'src/emailConfirmation/emailConfirmation.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService,

     private readonly configService: ConfigService,
        private readonly emailConfirmationService: EmailConfirmationService
      // private readonly recentlySongsService: RecentlySongsService
     ) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    const user = this.authenticationService.register(registrationData);
    const test = 'Duy'
     await this.emailConfirmationService.sendVerificationLink(registrationData.email);
     return test 
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async logIn(@Req() request: RequestWithUser, @Res() response: Response) {
    const { user } = request;
    const token = this.authenticationService.getCookieWithJwtToken(user.id);
    const cookie = `Authentication=${token}; HttpOnly; Path=/;  Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')};`;
    response.setHeader('Set-Cookie',cookie);
    delete user.password; 
    return response.send({
      user,
      token: token,
      message: 'Login account success',
    });
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(@Res() response: Response) {
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    return response.sendStatus(200);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post()
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    // user.password = undefined;
    return user;
  }
}
