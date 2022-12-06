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
const posts_service_1 = require("./posts.service");
const createPost_dto_1 = require("./dto/createPost.dto");
const updatePost_dto_1 = require("./dto/updatePost.dto");
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    getAllPosts() {
        return this.postsService.getAllPosts();
    }
    getPostById(id) {
        return this.postsService.getPostById(id);
    }
    async createPost(post) {
        return this.postsService.createPost(post);
    }
    async updatePost(id, post) {
        return this.postsService.updatePost(id, post);
    }
    async deletePost(id) {
        return this.postsService.deletePost(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPost_dto_1.default]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePost_dto_1.default]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePost", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.default])
], PostsController);
exports.default = PostsController;
//# sourceMappingURL=posts.controller.js.map