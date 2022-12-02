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
import RePassWordDto from './dto/repassword.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly configService: ConfigService,
    private readonly emailConfirmationService: EmailConfirmationService, // private readonly recentlySongsService: RecentlySongsService
  ) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) { 
    const user = this.authenticationService.register(registrationData);
    await this.emailConfirmationService.sendVerificationLink(
      registrationData.email,
    );
    return user;
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async logIn(@Req() request: RequestWithUser, @Res() response: Response) {
    const { user } = request;
    const token = this.authenticationService.getCookieWithJwtToken(user.id);

    delete user.password;

    response.setHeader(
      'Set-Cookie',
      `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
        'JWT_EXPIRATION_TIME',
      )}`,
    );
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


  @UseGuards(JwtAuthenticationGuard)
    @Post('rePassword')
  async rePassword(@Req() request: RequestWithUser, @Body() rePassword: RePassWordDto) {

     await this.authenticationService.rePassword(request.user,rePassword)
  }
  @UseGuards(JwtAuthenticationGuard)
  @Post('forgotPassword')
  async forgotPassword(@Req() request: RequestWithUser ) {

    const pass =  Math.floor(Math.random() * 10000000);
    const passs= String(pass)
 await this.authenticationService.forgotPassword(request.user,{password:passs})



    // const { user } = request;
    // const token = this.authenticationService.getCookieWithJwtToken(user.id);

    // delete user.password;

    //  response.setHeader('Set-Cookie', `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`);
    //   return response.send({
    //   user,
    //   token: token,
    //   message: 'Login account success',
    // });
  }
}
