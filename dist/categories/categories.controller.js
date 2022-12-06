"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
const createCategory_dto_1 = require("./dto/createCategory.dto");
const updateCategory_dto_1 = require("./dto/updateCategory.dto");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    getAllCategories() {
        return this.categoriesService.getAllCategories();
    }
    getSongByCategory(id) {
        return this.categoriesService.getSongByCategories(id);
    }
    getCategoryById(id) {
        return this.categoriesService.getCategoryById(id);
    }
    async createCategory(req, category) {
        return this.categoriesService.createCategory(category, req.user);
    }
    async updateCategory(req, category) {
        return this.categoriesService.updateCategory(category, req.user);
    }
    async deleteCategory(id) {
        return this.categoriesService.deleteCategory(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Get)('/getById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getSongByCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createCategory_dto_1.default]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createCategory", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, updateCategory_dto_1.default]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
CategoriesController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [categories_service_1.default])
], CategoriesController);
exports.default = CategoriesController;
//# sourceMappingURL=categories.controller.js.map