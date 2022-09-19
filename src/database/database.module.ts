import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {config} from "dotenv"
config()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        // ssl:true,
        // url:configService.get('POSTGRES_URI'),
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        // url: configService.get('DATABASE_URL'),
        //type: 'postgres',
        // extra:{
        //   ssl:{
        //     rejectUnauthorized:false
        //   }
        // },
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],

        autoLoadEntities: true,
        //synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}
