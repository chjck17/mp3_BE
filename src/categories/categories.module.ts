import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from './category.entity';
import CategoriesService from './categories.service';
import CategoriesController from './categories.controller';
import Song from 'src/songs/song.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Category,Song])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoryModule {}
