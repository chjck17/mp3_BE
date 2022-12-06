import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import RePassWordUserDto from './dto/rePassWord.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getByEmail(email: string): Promise<User>;
    getUserPlayList(id: User): Promise<import("../userplaylist/userplaylist.entity").default[]>;
    getUserPlayListDetail(id: User, playlistId: string): Promise<import("../userplaylist/userplaylist.entity").default>;
    getById(id: string): Promise<User>;
    create(userData: CreateUserDto): Promise<User>;
    rePassWord(id: string, password: RePassWordUserDto): Promise<import("typeorm").UpdateResult>;
    markEmailAsConfirmed(email: string): Promise<import("typeorm").UpdateResult>;
    createWithGoogle(email: string, name: string): Promise<User>;
    setCurrentRefreshToken(refreshToken: string, userId: string): Promise<void>;
}
