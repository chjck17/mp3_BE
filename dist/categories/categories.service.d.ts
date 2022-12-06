import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
import Category from './category.entity';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
export default class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    getAllCategories(): Promise<Category[]>;
    getSongByCategories(id: string): Promise<Category>;
    getCategoryById(id: string): Promise<Category>;
    createCategory(category: CreateCategoryDto, user: User): Promise<Category>;
    updateCategory(category: UpdateCategoryDto, user: User): Promise<Category>;
    deleteCategory(id: string): Promise<void>;
}
