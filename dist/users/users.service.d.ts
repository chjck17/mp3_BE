import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import RePassWordUserDto from './dto/rePassWord.dto';
import EditProfileDto from './dto/editProfile.dto';
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
    editProfile(id: string, profile: EditProfileDto): Promise<{
        sex: string;
        dateOfBirth: Date;
        country: string;
        id?: string;
        email: string;
        isEmailConfirmed: boolean;
        name: string;
        role: string;
        password: string;
        userPlaylist: import("../userplaylist/userplaylist.entity").default[];
        recentlySongs: import("../recentlysongs/recentlysong.entity").default;
        favoriteSongs: import("../favoritesongs/favoritesong.entity").default;
        isRegisteredWithGoogle: boolean;
        currentHashedRefreshToken?: string;
    } & User>;
}
