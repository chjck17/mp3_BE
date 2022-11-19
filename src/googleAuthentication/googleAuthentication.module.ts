import { Module } from '@nestjs/common';
import { GoogleAuthenticationController } from './googleAuthentication.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { GoogleAuthenticationService } from './googleAuthentication.service';
import { AuthenticationModule } from '../authentication/authentication.module';
import { UsersService } from 'src/users/users.service';
import { AuthenticationService } from 'src/authentication/authentication.service';
import User from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule, UsersModule,JwtModule.register({}), AuthenticationModule,TypeOrmModule.forFeature([User])],
  providers: [GoogleAuthenticationService,UsersService,AuthenticationService],
  controllers: [GoogleAuthenticationController],
  exports: []
})
export class GoogleAuthenticationModule {}
