import { Body, Controller, Delete, Get,Req, Param, Patch, Post, UseGuards } from '@nestjs/common';
import CategoriesService from './categories.service';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
@Controller('category')
export default class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
  ) {}
  @UseGuards(JwtAuthenticationGuard)
  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
  @Get('/getById/:id')
  @UseGuards(JwtAuthenticationGuard)
  getSongByCategory(@Param('id') id:string) {
    return this.categoriesService.getSongByCategories(Number(id));
  }
  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoriesService.getCategoryById(Number(id));
  }
  @UseGuards(JwtAuthenticationGuard)
  @Post()
  async createCategory(@Req() req:RequestWithUser,@Body() category: CreateCategoryDto) {
    return this.categoriesService.createCategory(category,req.user);
  }
  @Patch(':id')
  async updateCategory(@Req() req:RequestWithUser,@Param('id') id: string, @Body() category: UpdateCategoryDto) {
    return this.categoriesService.updateCategory(Number(id), category,req.user);
  }
  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(Number(id));
  }
}
