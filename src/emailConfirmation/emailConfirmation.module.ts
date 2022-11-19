import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import EmailService from 'src/email/email.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { EmailConfirmationController } from './emailConfirmation.controller';
import { EmailConfirmationService } from './emailConfirmation.service';
import User from 'src/users/user.entity';
@Module({
  imports: [ConfigModule, EmailModule, JwtModule.register({}), UsersModule,TypeOrmModule.forFeature([User])],
  providers: [EmailConfirmationService,UsersService,EmailService],
  exports: [EmailConfirmationService],
  controllers: [EmailConfirmationController]
})
export class EmailConfirmationModule {}
