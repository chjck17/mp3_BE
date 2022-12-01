import {
  Body,
  Controller,
  Delete,
  Get,
  Req,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import CategoriesService from './categories.service';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from './requestWithUser.interface';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
@Controller('category')
export default class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  //Lấy danh sách category
  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
  //Lấy bài hát theo category
  @Get('/getById/:id')
  getSongByCategory(@Param('id') id: string) {
    return this.categoriesService.getSongByCategories(id);
  }
  //Lấy category theo id
  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoriesService.getCategoryById(id);
  }
  //Tạo mới category
  @UseGuards(JwtAuthenticationGuard)
  @Post()
  async createCategory(
    @Req() req: RequestWithUser,
    @Body() category: CreateCategoryDto,
  ) {
    return this.categoriesService.createCategory(category, req.user);
  }
  //Cập nhập category
  @Patch(':id')
  async updateCategory(
    @Req() req: RequestWithUser,
    @Body() category: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(category, req.user);
  }
  //Xoá category
  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}
