
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as cookieParser from 'cookie-parser';
// // import { ValidationPipe } from '@nestjs/common';
 
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   // app.useGlobalPipes(new ValidationPipe());
//   app.use(cookieParser());
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe  } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('MUSIC MP3 ')
    .setDescription('Music MP3 API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 5000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
