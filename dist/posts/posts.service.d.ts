import CreatePostDto from './dto/createPost.dto';
import Post from './post.entity';
import UpdatePostDto from './dto/updatePost.dto';
import { Repository } from 'typeorm';
export default class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    getAllPosts(): Promise<Post[]>;
    getPostById(id: string): Promise<Post>;
    createPost(post: CreatePostDto): Promise<Post>;
    updatePost(id: string, post: UpdatePostDto): Promise<Post>;
    deletePost(id: string): Promise<void>;
}
