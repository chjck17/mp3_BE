import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import User from 'src/users/user.entity';
import Category from './category.entity';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
@Injectable()
export default class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}
  getAllCategories() {
    return this.categoriesRepository.find({relations:['songs']});
  }
   async getSongByCategories(id:number) {
    const songst= await this.categoriesRepository.find({relations:['songs']});
    const userPlaylist= songst.filter(item => item.id == id ,)
    return userPlaylist;
  }
  async getCategoryById(id: number) {
    const category = await this.categoriesRepository.findOne(id);
    if (category) {
      return category;
    }
    throw new HttpException('category not found', HttpStatus.NOT_FOUND);
  }
  async createCategory(category: CreateCategoryDto,user:User ) {
    
    if(user.role =='admin'){
    const newSong = await this.categoriesRepository.create(category);
    await this.categoriesRepository.save(newSong);
    return newSong;
    }
    throw new UnauthorizedException;
  }
  async updateCategory(id: number, category: UpdateCategoryDto,user:User) {
    if(user.role== 'admin'){
    await this.categoriesRepository.update(id,category);
    const updatedSong = await this.categoriesRepository.findOne(id);
    if (updatedSong) {
      return updatedSong
    }
    throw new HttpException('category not found', HttpStatus.NOT_FOUND);
  }
  throw new UnauthorizedException;
  }
  async deleteCategory(id: number) {

    const deleteResponse = await this.categoriesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('category not found', HttpStatus.NOT_FOUND);
    }
  }
}
