import CategoriesService from './categories.service';
import RequestWithUser from './requestWithUser.interface';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
export default class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<import("./category.entity").default[]>;
    getSongByCategory(id: string): Promise<import("./category.entity").default>;
    getCategoryById(id: string): Promise<import("./category.entity").default>;
    createCategory(req: RequestWithUser, category: CreateCategoryDto): Promise<import("./category.entity").default>;
    updateCategory(req: RequestWithUser, category: UpdateCategoryDto): Promise<import("./category.entity").default>;
    deleteCategory(id: string): Promise<void>;
}
